//coleccion  categoria

{
    "_id": {
      "$oid": "63f658b3f51caba9a041651a"
    },
    "nombre": "vegana"
  }

  //coleccion clientes

  {
    "_id": {
      "$oid": "63f6484ff51caba9a041650d"
    },
    "nombre": "carla",
    "apellidos": "ramirez hernandez",
    "direccion": {
      "calle": "ferrea",
      "numero": 3,
      "piso": 5,
      "puerta": 2,
      "ciudad": "barcelona",
      "codigo postal": "08036",
      "pais": "españa"
    },
    "telefono": "12345689"
  }

  //coleccion empleado

  {
    "_id": {
      "$oid": "63f65952f51caba9a0416525"
    },
    "nombre": "gabriela",
    "apellidos": "zapata castro",
    "telefono": 123123456,
    "nif": "43218796H",
    "cargo": "cocinero"
  }

  //coleccion entregas

  {
    "_id": {
      "$oid": "63f660f6f51caba9a0416543"
    },
    "pedido_id": "63f65fcdf51caba9a041653d",
    "repartidor_id": "63f65f61f51caba9a0416537",
    "fecha entrega": {
      "$date": {
        "$numberLong": "1675468800000"
      }
    },
    "estado": "entregado"
  }

  //coleccion pedido 

  {
    "_id": {
      "$oid": "63f65fcdf51caba9a041653d"
    },
    "cliente_id": "63f6484ff51caba9a041650d",
    "tienda_id": "63f65753f51caba9a0416515",
    "fecha_hora": {
      "$date": {
        "$numberLong": "1675468800000"
      }
    },
    "tipo entrega": "domicilio",
    "productos": [
      "63f65b5ff51caba9a041652e",
      "63f65eadf51caba9a0416535"
    ],
    "repartidor_id": "63f65f61f51caba9a0416537",
    "fecha entrega": ""
  }

  //coleccion producto

  {
    "_id": {
      "$oid": "63f65b5ff51caba9a041652e"
    },
    "nombre": "hamburguesa infantil",
    "descripcion": "hamburguesa sencilla pequeña",
    "imagen": "",
    "precio": 5
  }

  //coleccion tienda

  {
    "_id": {
      "$oid": "63f65753f51caba9a0416515"
    },
    "direccion": {
      "calle": "brazil",
      "numero": 2,
      "piso": "bajo",
      "puerta": 63,
      "ciudad": "barcelona",
      "codigo postal": "08036",
      "pais": "españa"
    }
  }


