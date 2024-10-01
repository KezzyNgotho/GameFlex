type Role = {#admin; #user; #guest};

var roles : [(Principal, Role)] = [];

public func assignRole(user: Principal, role: Role): async () {
  roles := (user, role) :: roles;
};

public func getRole(user: Principal): async ?Role {
  return List.find(roles, func((u, _)) { u == user });
};