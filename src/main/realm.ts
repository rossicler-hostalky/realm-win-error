import Realm from 'realm';

class Car extends Realm.Object {
  static schema = {
    name: 'Car',
    properties: {
      _id: { type: 'objectId', default: () => new Realm.BSON.ObjectId() },
      make: 'string',
      model: 'string',
      miles: 'int?',
    },
    primaryKey: '_id',
  };
}

export default Car;

export const realmTest = async () => {
  const realm = await Realm.open({
    schema: [Car],
  });

  let car1;

  realm.write(() => {
    car1 = realm.create(Car, {
      make: 'Nissan',
      model: 'Sentra',
      miles: 1000,
    });
  });
  console.log('car created!', car1);
};
