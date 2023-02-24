//coleccion clientes

{
  "nombre": "carla",
  "direccion": {
    "calle": "ferrea",
    "numero": 3,
    "piso": 5,
    "puerta": 2,
    "ciudad": "barcelona",
    "codigo postal": "08036",
    "pais": "españa"
  },
  "telefono": 635447866,
  "correo electronico": "lalala@hotmail.com",
  "fecha registro": {
    "$date": {
      "$numberLong": "1607814000000"
    }
  },
  "recomendador_id": ""
}

//coleccion empleado

{
  "cargo": "dependiente",
  "nombre": "carlos"
}

//coleccion gafas


{
  "marca": "ray-ban",
  "gaduacion cristal": {
    "izquierdo": 0,
    "derecho": 1
  },
  "tipo de montura": "flotante",
  "color montura": "rojo",
  "color vidrio izquierdo": "azul",
  "color vidrio derecho": "azul",
  "precio": 30,
  "proveedor_id": "63f5fa122c2af6cc3b24bda7"
}

//coleccion proveedor

{
  "nombre": "proveedor1",
  "direccion": {
    "calle": "colegio",
    "numero": 3,
    "piso": 1,
    "puerta": 2,
    "ciudad": "barcelona",
    "codigo postal": "08036",
    "pais": "españa"
  },
  "telefono": 123456789,
  "fax": 123456789,
  "nif": "48356210V",
  "marca": [
    "ray-ban",
    "optica"
  ]
}

//coleccion venta

{
  "_id": {
    "$oid": "63f63f55f51caba9a04164ff"
  },
  "fecha venta": {
    "$date": {
      "$numberLong": "1670284800000"
    }
  },
  "empleado id": "63f6437df51caba9a0416506",
  "cliente id": "63f601fb2c2af6cc3b24bdbd",
  "gafas id": "63f5ff1e2c2af6cc3b24bdb2"
}