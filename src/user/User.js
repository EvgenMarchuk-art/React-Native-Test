import {API_URL, API_TOKEN} from '@env';

async function getUsers() {
  console.log(API_URL);
  console.log(API_TOKEN);

  return await fetch(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
}

getUsers();

export default getUsers;
