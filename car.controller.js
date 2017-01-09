(function() {
  'use strict';

  angular
    .module('plunker')
    .controller('CarController', CarController);


  function CarController() {
    
    var carVm = this;
    
    carVm.make = 'Tesla';
    carVm.model = 'Model X';
    carVm.driving = function (){
      console.log(carVm.make + " " + carVm.model);
    };
    
    carVm.addDriver = function (){
      carVm.drivers.push(carVm.newDriver);
      carVm.newDriver = null;
    };
    
    carVm.delDriver = function (id){
      carVm.drivers.splice(id,1);
    }
    
    carVm.drivers = [
  {
    "email": "Wyman96@hotmail.com",
    "address": {
      "street": "1682 Christy Flat",
      "city": "East Valentineberg",
      "zip": "38187",
      "state": "SD",
      "country": "USA"
    },
    "dateCreated": "2017-01-02T05:44:56.792Z",
    "company": {
      "name": "Schuppe - Nolan",
      "website": "https://clara.org"
    },
    "profilePic": "http://lorempixel.com/640/480/animals"
  },
  {
    "id": "73893dd1-44ba-4954-99ef-575c72d70b1c",
    "firstName": "Jess",
    "lastName": "Kuhn",
    "email": "Damien.Ledner55@yahoo.com",
    "address": {
      "street": "467 Michelle Estate",
      "city": "Priscillaview",
      "zip": "24720-7544",
      "state": "AK",
      "country": "USA"
    },
    "dateCreated": "2017-01-02T20:57:07.127Z",
    "company": {
      "name": "Turcotte Inc",
      "website": "https://angelo.com"
    },
    "profilePic": "http://lorempixel.com/640/480/people"
  },
  {
    "id": "4231c833-4fc1-459c-af2c-440e2aad3a54",
    "firstName": "Philip",
    "lastName": "Miller",
    "email": "Verna_Mayert@hotmail.com",
    "address": {
      "street": "2254 Sanford Viaduct",
      "city": "South Allyland",
      "zip": "59074",
      "state": "DE",
      "country": "USA"
    },
    "dateCreated": "2017-01-02T00:10:19.512Z",
    "company": {
      "name": "Emmerich and Sons",
      "website": "https://devante.name"
    },
    "profilePic": "http://lorempixel.com/640/480/transport"
  },
  {
    "id": "6964d9aa-f168-4d0c-b525-fceaf97f09f3",
    "firstName": "Cydney",
    "lastName": "Denesik",
    "email": "Betty52@yahoo.com",
    "address": {
      "street": "69546 Fredy Avenue",
      "city": "Lindgrenbury",
      "zip": "14060-9403",
      "state": "NM",
      "country": "USA"
    },
    "dateCreated": "2017-01-02T05:31:46.896Z",
    "company": {
      "name": "Kihn LLC",
      "website": "http://alba.org"
    },
    "profilePic": "http://lorempixel.com/640/480/technics"
  },
  {
    "id": "de81511a-4148-439b-a27c-3e1a48d12c30",
    "firstName": "Rosalind",
    "lastName": "Cremin",
    "email": "Nicolette.Glover@hotmail.com",
    "address": {
      "street": "9474 DuBuque Alley",
      "city": "West Trentport",
      "zip": "53220",
      "state": "AZ",
      "country": "USA"
    },
    "dateCreated": "2017-01-02T19:41:37.156Z",
    "company": {
      "name": "Will LLC",
      "website": "http://holly.biz"
    },
    "profilePic": "http://lorempixel.com/640/480/people"
  },
  {
    "id": "f1354f56-dd30-4f39-8e7a-e60da6237dfb",
    "firstName": "Bartholome",
    "lastName": "Lindgren",
    "email": "Sigurd.Cremin20@yahoo.com",
    "address": {
      "street": "058 Sedrick Fall",
      "city": "Delmerview",
      "zip": "23645-0666",
      "state": "UT",
      "country": "USA"
    },
    "dateCreated": "2017-01-02T04:44:20.070Z",
    "company": {
      "name": "Bauch, Hermiston and Senger",
      "website": "http://brandyn.biz"
    },
    "profilePic": "http://lorempixel.com/640/480/fashion"
  },
  {
    "id": "b678c7ab-9c1c-4fbd-8523-8ca403a62db1",
    "firstName": "Zaria",
    "lastName": "Mosciski",
    "email": "Guy.Monahan2@yahoo.com",
    "address": {
      "street": "97372 Kshlerin Turnpike",
      "city": "Sarahbury",
      "zip": "14691",
      "state": "VT",
      "country": "USA"
    },
    "dateCreated": "2017-01-02T00:52:12.550Z",
    "company": {
      "name": "Kihn - Rempel",
      "website": "https://lemuel.org"
    },
    "profilePic": "http://lorempixel.com/640/480/transport"
  },
  {
    "id": "2c636ec5-0729-47d5-97f9-923832f79028",
    "firstName": "Maudie",
    "lastName": "Gulgowski",
    "email": "Elwyn6@gmail.com",
    "address": {
      "street": "675 Tillman Crossroad",
      "city": "New Johnnyside",
      "zip": "32284-4450",
      "state": "CT",
      "country": "USA"
    },
    "dateCreated": "2017-01-02T04:39:41.116Z",
    "company": {
      "name": "Romaguera - Rolfson",
      "website": "http://camila.name"
    },
    "profilePic": "http://lorempixel.com/640/480/city"
  },
  {
    "id": "d08ff22f-6f23-4c9b-8718-f9c1f14d4c99",
    "firstName": "Ignatius",
    "lastName": "Stroman",
    "email": "Emmitt23@yahoo.com",
    "address": {
      "street": "20498 Sylvia Shores",
      "city": "South Albert",
      "zip": "97796-5690",
      "state": "MA",
      "country": "USA"
    },
    "dateCreated": "2017-01-02T18:28:07.996Z",
    "company": {
      "name": "Bednar - Sanford",
      "website": "http://litzy.biz"
    },
    "profilePic": "http://lorempixel.com/640/480/fashion"
  },
  {
    "id": "ed8fb46e-dab4-4a55-bf12-4bfa22136b63",
    "firstName": "Alexandre",
    "lastName": "Wilderman",
    "email": "Nya.Zieme39@gmail.com",
    "address": {
      "street": "83580 Lowe Corner",
      "city": "West Carolyn",
      "zip": "23076",
      "state": "KY",
      "country": "USA"
    },
    "dateCreated": "2017-01-02T16:51:15.505Z",
    "company": {
      "name": "Lockman - Hintz",
      "website": "http://trystan.info"
    },
    "profilePic": "http://lorempixel.com/640/480/business"
  }
]

  }
})();