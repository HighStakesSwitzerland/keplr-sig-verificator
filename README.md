# keplr-sig-verificator

Verifies the validity of a message signed with secp256k1 Eliptic Curve algorithm

# Running

### Development
```
npm install
npm run build
npm run dev
```

### Production
```
npm install
npm run build
npm run start
```

Server will listen the port specifed in `app.ts`

# Contract

### Request
```
POST http://localhost:3000/verify/:bech32_prefix/:wallet_address

{
    "data": "{\"field1\": \"value1\", ...}",
    "signature":
    {
        "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "AuDwv8T8jSVcXASEEEagxVk5RHk0ageKtIgTkJp5L8y"
        },
        "signature": "zM9pXN7hJOPepxAwXnj+DSJQp1k9vx8RZCrsOpyX6218HOQMutAREGQiSMwXpJTQ/b6cm4OqGpftH0GoPmkC=="
    }
}

```

### Response
```
{
  "valid": true or false
}
```