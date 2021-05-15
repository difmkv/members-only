import { useState, useEffect } from "react";
import firebase from "firebase/app";

export const useUserGroups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userGroups, setUserGroups] = useState([]);

  useEffect(() => {
    const loadGroups = async () => {
      const user = firebase.auth().currentUser;
      if (!user) {
        setUserGroups([]);
        setIsLoading(false);
        return;
      }

      const response = await fetch(`/users/${user.uid}/groups`, {
        headers: {
          AuthToken: await user.getIdToken(),
        },
      });
      const groups = await response.json();
      setUserGroups(groups);
      setIsLoading(false);
    };

    loadGroups();
  }, []);

  return { isLoading, userGroups };
};
