interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: unknown;
  company: unknown;
}

fetch("https://jsonplaceholder.typicode.com/users/5", {
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then((res) => {
    return res.json() as Promise<User[]>
  })
  .then((data: User[]) => {
    console.log(data);
  })
  .catch((err: unknown) => {
    console.log(err);
  });
