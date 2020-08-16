{
  "goodsOwner": {
    "id": 159,
    "name": "REST example"
  },
  "orderInfo": {
    "orderId": 50163,
    "orderNumber": "O1231234",
    "goodsOwnerOrderId": "KL33334",
    "referenceNumber": "Ref1",
    "salesCode": "Att. Test Testperson",
    "orderRemark": "Very important order",
    "deliveryInstruction": "Do not bend",
    "servicePointCode": "3232323",
    "freeText1": "FT1",
    "freeText2": "FT2",
    "freeText3": "FT3",
    "orderType": {
      "code": "B2B",
      "name": "Business to Business"
    },
    "wayOfDelivery": {
      "code": "SHP1",
      "name": "Shipment way 1"
    },
    "deliveryDate": "2019-10-10",
    "createdDate": "2019-10-10T09:03:49.437Z",
    "shippedTime": "2019-10-10T09:05:47.127Z",
    "wayBill": "UA65456546",
    "returnWayBill": "UE4534434",
    "orderStatus": {
      "number": 500,
      "text": "Hämtad"
    },
    "emailNotification": {
      "toBeNotified": true,
      "value": "a@b.com"
    },
    "smsNotification": {
      "toBeNotified": true,
      "value": "123456789"
    },
    "telephoneNotification": {
      "toBeNotified": true,
      "value": "987564"
    },
    "orderedNumberOfItems": 2.0,
    "allocatedNumberOfItems": 2.0,
    "pickedNumberOfItems": 2.0,
    "customsInfo": {
      "customsValueCurrencyCode": "SEK"
    }
  },
  "consignee": {
    "customerNumber": "CN1",
    "name": "Name 1",
    "address1": "Address 1",
    "address2": "Address 2",
    "address3": "Address 3",
    "postCode": "12345",
    "city": "City",
    "countryCode": "US",
    "countryStateCode": "MN",
    "remark": "Very important customer",
    "doorCode": "1111"
  },
  "parcels": [
    {
      "id": 207,
      "parcelNumber": "00376546546",
      "isReturnParcel": false
    },
    {
      "id": 208,
      "parcelNumber": "00371231232",
      "isReturnParcel": true
    }
  ],
  "orderLines": [
    {
      "id": 48838,
      "rowNumber": "1",
      "article": {
        "articleSystemId": 18069,
        "articleNumber": "1009",
        "articleName": "",
        "productCode": ""
      },
      "comment": "Line comment 1",
      "orderedNumberOfItems": 2.0,
      "allocatedNumberOfItems": 2.0,
      "pickedNumberOfItems": 2.0,
      "reportedNumberOfItems": null,
      "shouldBePicked": true,
      "pickedArticleItems": [
        {
          "articleItemId": 59290,
          "numberOfItems": 1.0,
          "inDate": "2019-10-10T09:05:28.583Z",
          "serial": "SSN2",
          "caseNumber": "",
          "batchNumber": "",
          "container": "",
          "comment": "",
          "weight": null,
          "volume": null,
          "isPicked": true,
          "isReturned": false,
          "expiryDate": null,
          "returnDate": null,
          "pickedTime": "2019-10-10T09:05:38.743Z",
          "returnCause": null,
          "location": "A15",
          "locationTypeCode": "",
          "articleItemStatus": null,
          "freeText1": ""
        },
        {
          "articleItemId": 59289,
          "numberOfItems": 1.0,
          "inDate": "2019-10-10T09:05:22.243Z",
          "serial": "SSN1",
          "caseNumber": "",
          "batchNumber": "",
          "container": "",
          "comment": "",
          "weight": null,
          "volume": null,
          "isPicked": true,
          "isReturned": false,
          "expiryDate": null,
          "returnDate": null,
          "pickedTime": "2019-10-10T09:05:41.25Z",
          "returnCause": null,
          "location": "A15",
          "locationTypeCode": "",
          "articleItemStatus": null,
          "freeText1": ""
        }
      ],
      "subOrderLines": null,
      "serialNumber": "SSN1",
      "lineTotalCustomsValue": 3000.0
    }
  ],
  "transporter": {
    "transporterName": "PostNord Sweden AB",
    "name": "PostNord Parcel (Nordic)",
    "code": "PLAB",
    "serviceCode": "P18"
  },
  "returnTransporter": {
    "transporterName": "PostNord Sweden AB",
    "name": "PostNord Return Drop Off (within Sweden)",
    "code": "PLAB",
    "serviceCode": "P24"
  }
}