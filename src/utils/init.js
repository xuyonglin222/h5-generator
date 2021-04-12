/**
 * Load app initial data.
 *
 */
import { meStore } from "stores";

const init = async cb => {
  // fetch my data
  await meStore.fetch();

  // fetch team list and user list immediately in background, bcz they're
  // needed in many pages
  // if (meStore.isLoggedIn){
  //     platformUsersStore.fetchAll({ silentMode: true });
  //     teamListStore.fetchAll({ silentMode: true });
  // }

  // const delay = 1000;
  const delay = 0;
  setTimeout(cb, delay);
};

export default init;
