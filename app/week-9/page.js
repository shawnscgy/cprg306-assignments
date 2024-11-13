"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useState } from "react";

const MyComponent = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [error, setError] = useState(null);

  // Event handler for signing in
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      setError("Failed to sign in");
      console.error(err);
    }
  };

  // Event handler for signing out
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      setError("Failed to sign out");
      console.error(err);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign In with GitHub</button>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default MyComponent;
