import { BSON, Realm } from 'realm';

// Define your object model
export class Lojas extends Realm.Object<Lojas> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  description!: string;
  isComplete: boolean = false;
  createdAt: Date = new Date();

  position: Realm.Types.Int = 0;

  user_id!: string;

  static primaryKey = '_id';
}