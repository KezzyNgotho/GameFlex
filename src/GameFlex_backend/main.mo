import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Array "mo:base/Array";
import Nat64 "mo:base/Nat64";
import Buffer "mo:base/Buffer";

// Import types from Types.mo
import Types "Types";

// Module for the main logic
actor Main {

    // State Variables
    stable var users : [Types.User] = [];
    stable var stadiums : [Types.Stadium] = [];
    stable var events : [Types.Event] = [];
    stable var bets : [Types.Bet] = [];
    stable var proposals : [Types.Proposal] = [];
    stable var players : [Types.Player] = []; // Adding a state variable for players

    // Global variable to store stadiums
    //var stadiums: [Stadium] = [];

    // User Management
    public func registerUser(identity : Principal, role : Types.Role) : async Bool {
        if (Array.find<Types.User>(users, func(u) { u.identity == identity }) == null) {
            let user = { identity = identity; role = role };
            users := Array.append(users, [user]);
            return true;
        };
        return false;
    };

    public func getUserRole(identity : Principal) : async ?Types.Role {
        let user = Array.find<Types.User>(users, func(u) { u.identity == identity });
        return switch (user) {
            case (?u) { ?u.role };
            case null { null };
        };
    };

    // Stadium Management (NFT)
    // Stadium Management (NFT)
    public func mintStadium(name : Text, owner : Principal) : async Bool {
        // Generate a new unique ID for the stadium based on the size of the stadium array.
        let stadiumId = Nat64.fromNat(stadiums.size() + 1);

        // Create a new stadium with an empty array of players
        let stadium = {
            id = stadiumId;
            name = name;
            owner = owner;
            players = [] : [Types.Player];
            teams = [] : [Types.Team]; // Initialize with an empty players array
        };

        // Append the new stadium to the list of stadiums
        stadiums := Array.append<Types.Stadium>(stadiums, [stadium]);

        return true;

    };

    public func getStadiums() : async [Types.Stadium] {
        return stadiums;
    };

    // Event Management
    // Event Management
    public func createEvent(title : Text, date : Time.Time, teams : [Types.Team]) : async Bool {
        // Generate a new unique ID for the event based on the size of the events array
        let eventId = Nat64.fromNat(events.size() + 1);

        // Create a new event
        let event = {
            id = eventId; // Set the unique event ID
            title = title; // Set the title of the event
            date = date; // Set the date of the event
            teams = teams; // Set the participating teams
        };

        // Append the new event to the list of events
        events := Array.append(events, [event]);
        return true;
    };

    public func getEvents() : async [Types.Event] {
        return events;
    };

    public func addPlayerToTeam(teamId : Nat64, player : Types.Player) : async Bool {
        // Step 1: Find the stadium containing the team using the teamId
        let stadiumOpt = Array.find<Types.Stadium>(
            stadiums,
            func(stadium : Types.Stadium) : Bool {
                // Check if the team exists in the stadium
                Array.find<Types.Team>(stadium.teams, func(team : Types.Team) : Bool { team.id == teamId }) != null;
            },
        );

        // Step 2: Handle the case where the stadium is found
        switch (stadiumOpt) {
            case (?stadium) {
                // Step 3: Find the team within the stadium
                let teamOpt = Array.find<Types.Team>(stadium.teams, func(team : Types.Team) : Bool { team.id == teamId });

                // Step 4: Handle the case where the team is found
                switch (teamOpt) {
                    case (?team) {
                        // Step 5: Update the team by appending the new player
                        let updatedPlayers = Array.append(team.players, [player]);
                        let updatedTeam : Types.Team = {
                            id = team.id;
                            name = team.name;
                            owner = team.owner; // Assuming team has an owner field
                            players = updatedPlayers;
                        };
                        // Step 6: Create a new teams array with the updated team
                        let updatedTeams : [Types.Team] = Array.tabulate<Types.Team>(
                            Array.size<Types.Team>(stadium.teams),
                            func(i : Nat) : Types.Team {
                                if (stadium.teams[i].id == team.id) {
                                    updatedTeam // Insert the updated team
                                } else {
                                    stadium.teams[i] // Keep the existing team
                                };
                            },
                        );

                        // Step 7: Create the updated stadium with modified teams
                        let updatedStadium : Types.Stadium = {
                            id = stadium.id;
                            name = stadium.name;
                            teams = updatedTeams;
                            owner = stadium.owner;
                            players = stadium.players; // Assuming 'players' is a field in your Types.Stadium
                        };
                        let players = team.players; // This is correct
                        // Step 8: Replace the updated stadium in the global stadiums array
                        let updatedStadiums : [Types.Stadium] = Array.tabulate<Types.Stadium>(
                            Array.size<Types.Stadium>(stadiums),
                            func(i : Nat) : Types.Stadium {
                                if (stadiums[i].id == stadium.id) {
                                    updatedStadium // Insert the updated stadium
                                } else {
                                    stadiums[i] // Keep the existing stadium
                                };
                            },
                        );
                        stadiums := updatedStadiums;
                        return true; // Player added successfully
                    };
                    case null {
                        return false; // Team not found
                    };
                };
            };
            case null {
                return false; // Stadium not found
            };
        };
    };

    // Betting Management
    public func placeBet(eventId : Nat64, amount : Nat, bettor : Principal) : async Bool {
        let event = Array.find<Types.Event>(events, func(e) { e.id == eventId });
        if (event != null) {
            let bet = { eventId = eventId; amount = amount; bettor = bettor };
            bets := Array.append(bets, [bet]);
            return true;
        };
        return false;
    };

    public func getBets() : async [Types.Bet] {
        return bets;
    };

    // Token Management
    public func mintTokens(amount : Nat, recipient : Principal) : async Bool {
        // Token minting logic to credit the recipient's account
        // Add tokens to the user's balance
        return true;
    };

    public func transferTokens(amount : Nat, from : Principal, to : Principal) : async Bool {
        // Token transfer logic from one user to another
        return true;
    };

    // Staking Management
    public func stakeTokens(amount : Nat, user : Principal) : async Bool {
        // Staking logic where users can stake tokens and earn rewards
        return true;
    };

    public func getStakedAmount(user : Principal) : async ?Nat {
        // Return the amount of tokens a user has staked
        return null;
    };

    // NFT Management
    public func mintNFT(metadata : Text, owner : Principal) : async Bool {
        // Mint an NFT with metadata and assign it to an owner
        return true;
    };

    public func transferNFT(nftId : Nat64, from : Principal, to : Principal) : async Bool {
        // Transfer an NFT from one user to another
        return true;
    };

    // Governance Management (DAO)
    public func createProposal(proposal : Text, proposer : Principal) : async Bool {
        let newProposal : Types.Proposal = {
            // Assuming Types.Proposal is the type of your proposal
            proposalId = Nat64.fromNat(Array.size<Types.Proposal>(proposals) + 1);
            proposal = proposal;
            proposer = proposer;
            votes = 0;
        };
        proposals := Array.append<Types.Proposal>(proposals, [newProposal]);
        return true;
    };

    public func voteOnProposal(proposalId : Nat64, user : Principal) : async Bool {
        let proposal = Array.find<Types.Proposal>(proposals, func(p) { p.proposalId == proposalId });
        switch (proposal) {
            case (?p) {
                let updatedProposal = { p with votes = p.votes + 1 };
                let updatedProposals : [Types.Proposal] = Array.tabulate<Types.Proposal>(
                    Array.size<Types.Proposal>(proposals),
                    func(i : Nat) : Types.Proposal {
                        if (proposals[i].proposalId == proposalId) {
                            updatedProposal // Insert the updated proposal
                        } else {
                            proposals[i] // Keep the existing proposal
                        };
                    },
                );
                proposals := updatedProposals;
                return true;
            };
            case null { return false };
        };
    };
    public func getProposals() : async [Types.Proposal] {
        return proposals;
    };
};
