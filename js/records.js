var records = {
    "FileHeader": [
        {
            "name": "type",
            "size": 1,
            "format": "/1/",
            "default": "1"
        },
        {
            "name": "priorityCode",
            "size": 2,
            "format": "/\\d\\d/",
            "default": "01"
        },
        {
            "name": "immediateDestination",
            "size": 10,
            "format": "/\\d{9}/"
        },
        {
            "name": "immediateOrigin",
            "size": 10,
            "format": "/\\d{10}/"
        },
        {
            "name": "fileCreationDate",
            "size": 6,
            "format": "/\\d{6}/"
        },
        {
            "name": "fileCreationTime",
            "size": 4,
            "format": "/\\d{4}/",
            "default": ""
        },
        {
            "name": "fileId",
            "size": 1,
            "format": "/[A-Z0-9]/",
            "default": ""
        },
        {
            "name": "recordSize",
            "size": 3,
            "format": "/\\d{3}/",
            "default": "094"
        },
        {
            "name": "blockingFactor",
            "size": 2,
            "format": "/\\d{2}/",
            "default": "10"
        },
        {
            "name": "formatCode",
            "size": 1,
            "format": "/1/",
            "default": "1"
        },
        {
            "name": "immediateDestinationName",
            "size": 23,
            "format": "Alpha",
            "default": ""
        },
        {
            "name": "immediateOriginName",
            "size": 23,
            "format": "Alpha",
            "default": ""
        },
        {
            "name": "referenceCode",
            "size": 8,
            "format": "Alpha",
            "default": ""
        }
    ],
    "BatchHeader": [
        {
            "name": "type",
            "size": 1,
            "format": "/5/",
            "default": "5"
        },
        {
            "name": "serviceClassCode",
            "size": 3,
            "format": "Numeric"
        },
        {
            "name": "companyName",
            "size": 16,
            "format": "Alpha"
        },
        {
            "name": "companyDiscretionaryData",
            "size": 20,
            "format": "Alpha",
            "default": ""
        },
        {
            "name": "companyIdentification",
            "size": 10,
            "format": "Numeric"
        },
        {
            "name": "standardEntryClassCode",
            "size": 3,
            "format": "/PPD|CCD"
        },
        {
            "name": "companyEntryDescription",
            "size": 10,
            "format": "Alpha"
        },
        {
            "name": "companyDescriptiveDate",
            "size": 6,
            "format": "Alpha",
            "default": ""
        },
        {
            "name": "effectiveEntryDate",
            "size": 6,
            "format": "Numeric"
        },
        {
            "name": "settlementDate",
            "size": 3,
            "format": "/[ ]{3}",
            "default": "   "
        },
        {
            "name": "originatorStatusCode",
            "size": 1,
            "format": "Numeric",
            "default": "1"
        },
        {
            "name": "originatingFinancialInstitution",
            "size": 8,
            "format": "Numeric"
        },
        {
            "name": "batchNumber",
            "size": 7,
            "format": "Numeric"
        }
    ],
    "EntryDetail": [
        {
            "name": "type",
            "size": 1,
            "format": "/6/",
            "default": "6"
        },
        {
            "name": "transactionCode",
            "size": 2,
            "format": "Numeric"
        },
        {
            "name": "receivingDFIIdentification",
            "size": 8,
            "format": "Numeric"
        },
        {
            "name": "checkDigit",
            "size": 1,
            "format": "Numeric"
        },
        {
            "name": "receivingDFIAccountNumber",
            "size": 17,
            "format": "Alpha"
        },
        {
            "name": "amount",
            "size": 10,
            "format": "Numeric"
        },
        {
            "name": "individualIdentificationNumber",
            "size": 15,
            "format": "Alpha"
        },
        {
            "name": "individualName",
            "size": 22,
            "format": "Alpha"
        },
        {
            "name": "discretionaryData",
            "size": 2,
            "format": "Alpha",
            "default": "  "
        },
        {
            "name": "addendaRecordIdentifier",
            "size": 1,
            "format": "/1|0/",
            "default": "0"
        },
        {
            "name": "ODFI ident",
            "size": 8,
            "format": "Numeric"
        },
        {
            "name": "traceNumber",
            "size": 7,
            "format": "Numeric"
        }
    ],
    "BatchControl": [
        {
            "name": "type",
            "size": 1,
            "format": "/8/",
            "default": "8"
        },
        {
            "name": "serviceClassCode",
            "size": 3,
            "format": "Numeric"
        },
        {
            "name": "entryCount",
            "size": 6,
            "format": "Numeric"
        },
        {
            "name": "entryHash",
            "size": 10,
            "format": "Numeric"
        },
        {
            "name": "debitAmount",
            "size": 12,
            "format": "Numeric"
        },
        {
            "name": "creditAmount",
            "size": 12,
            "format": "Numeric"
        },
        {
            "name": "companyIdentification",
            "size": 10,
            "format": "Numeric"
        },
        {
            "name": "reserved",
            "size": 25,
            "format": "Alpha",
            "default": ""
        },
        {
            "name": "originatingDFIIdentification",
            "size": 8,
            "format": "Numeric"
        },
        {
            "name": "batchNumber",
            "size": 7,
            "format": "Numeric"
        }
    ],
    "FileControl": [
        {
            "name": "type",
            "size": 1,
            "format": "/9/",
            "default": "9"
        },
        {
            "name": "batchCount",
            "size": 6,
            "format": "Numeric"
        },
        {
            "name": "blockCount",
            "size": 6,
            "format": "Numeric"
        },
        {
            "name": "entryCount",
            "size": 8,
            "format": "Numeric"
        },
        {
            "name": "entryHash",
            "size": 10,
            "format": "Numeric"
        },
        {
            "name": "totalDebitAmount",
            "size": 12,
            "format": "Amount"
        },
        {
            "name": "totalCreditAmount",
            "size": 12,
            "format": "Amount"
        },
        {
            "name": "reserved",
            "size": 39,
            "format": "/[ ]{39}/",
            "default": ""
        }
    ],
    'FillerRow': [
        {
            'name': 'filler row',
            'size': 94
        }
    ]
};

var rowTypes = {
    '1': 'FileHeader',
    '5': 'BatchHeader',
    '6': 'EntryDetail',
    '8': 'BatchControl',
    '9': 'FileControl'
};

var recordsNamesColors = {
    "filler row": "#fae9d7",
    "type": "#faebd7",
    "priorityCode": "#eee8aa",
    "immediateDestination": "#rgba(139, 0, 0, 0.56);",
    "immediateOrigin": "#708090",
    "fileCreationDate": "#ffb6c1",
    "fileCreationTime": "#ff69b4",
    "fileId": "#ffd700",
    "recordSize": "#008b8b",
    "blockingFactor": "#00ffff",
    "formatCode": "#00ffff",
    "immediateDestinationName": "hsla(82, 39%, 30%, 0.65)",
    "immediateOriginName": "#ffebcd",
    "referenceCode": "#f4a460",
    "serviceClassCode": "#00bfff",
    "companyName": "#808080",
    "companyDiscretionaryData": "#ffa07a",
    "companyIdentification": "#f5f5dc",
    "standardEntryClassCode": "#7fff00",
    "companyEntryDescription": "#dc143c",
    "companyDescriptiveDate": "#9acd32",
    "effectiveEntryDate": "#b0e0e6",
    "settlementDate": "#f08080",
    "originatorStatusCode": "#deb887",
    "originatingFinancialInstitution": "#daa520",
    "batchNumber": "#32cd32",
    "transactionCode": "#eee8aa",
    "receivingDFIIdentification": "#ffa500",
    "checkDigit": "#fffafa",
    "receivingDFIAccountNumber": "#66cdaa",
    "amount": "#7fffd4",
    "individualIdentificationNumber": "#6b8e23",
    "individualName": "#B2C3C3",
    "discretionaryData": "#e9967a",
    "addendaRecordIdentifier": "#e6e6fa",
    "ODFI ident": "#ffd700",
    "traceNumber": "#a52a2a",
    "entryCount": "#f5deb3",
    "entryHash": "#48d1cc",
    "debitAmount": "#da70d6",
    "creditAmount": "#a0522d",
    "reserved": "#ffebcd",
    "originatingDFIIdentification": "#008b8b",
    "batchCount": "#a0522d",
    "blockCount": "#faebd7",
    "totalDebitAmount": "#808000",
    "totalCreditAmount": "#696969"
};
