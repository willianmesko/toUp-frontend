interface Adress {
  city: string;
  state: string;
  country: string;
}

export default interface User {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
  bio: string;
  trainer_id?: string;
  address?: Adress;
}
