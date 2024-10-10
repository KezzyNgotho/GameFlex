import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";
import Nat64 "mo:base/Nat64";
import Blob "mo:base/Blob";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Result "mo:base/Result";

// Define the module to contain the types
module Types {
    // User Roles

    public type Role = {
        #Owner; // Represents the owner of the application
        #Manager; // Represents a manager with elevated privileges
        #Participant; // Represents a regular participant
        #Unknown; // Represents an unknown role
    };

    // User Type
    public type User = {
        identity : Principal; // User's unique identity
        role : Role; // Role of the user in the application
    };

    // Sports-related Types
    public type Team = {
        id : Nat64; // Unique ID for the team
        name : Text; // Name of the team
        players : [Player]; // List of players associated with the team
    };

    // Event Types
    public type Event = {
        id : Nat64; // Unique ID of the event
        title : Text; // Title of the event
        date : Time.Time; // Date of the event
        teams : [Team]; // List of teams participating in the event
    };

    // Bet Type
    public type Bet = {
        eventId : Nat64; // The ID of the event being bet on
        amount : Nat; // Bet amount
        bettor : Principal; // User placing the bet
    };

    // Player Type for Fantasy Sports
    public type Player = {
        id : Nat64; // Unique ID for the player
        name : Text; // Player's name
        position : Text; // Player's position in the team
        stats : Nat; // Player's stats for the game
    };

    // Proposal Type for Governance
    public type Proposal = {
        proposalId : Nat64; // Unique ID of the proposal
        proposal : Text; // Text of the proposal
        proposer : Principal; // Proposer's identity
        votes : Nat; // Number of votes for the proposal
    };

    // Stadium NFT Type
    /*  public type Stadium = {
        id : Nat64;     // Unique ID for the stadium
        src : Text;     // Source (e.g., image URL)
        title : Text;   // Title of the stadium
        creator : Text; // Creator of the stadium
        creatorUrl : Text; // URL for the creator
    }; */ /*
    public type Stadium = {
        id : Nat;
        src : Text;
        title : Text;
        creator : Text;
        creatorUrl : Text;
    }; */

    public type Stadium = {
        id : Nat;
        src : Text;
        title : Text;
        creator : Text;
        creatorUrl : Text;
    };

    // Additional types can be added here as needed
};
