// Types.mo

import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";
import Nat64 "mo:base/Nat64";
import Blob "mo:base/Blob";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Result "mo:base/Result";

// User Roles
public type Role = variant {
    Owner;
    Manager;
    Participant;
    Unknown
};

// User Type
public type User = {
    identity: Principal;  // User's unique identity
    role: Role;           // Role of the user in the application
};

// Sports-related Types
public type Team = {
    name: Text;           // Name of the team
    owner: Principal;     // Owner of the team
};

// Event Types
public type Event = {
    title: Text;          // Title of the event
    date: Time.Time;      // Date of the event
    teams: [Team];        // List of teams participating in the event
};

// Additional types can be added here as needed
