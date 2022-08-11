import express from 'express';
import {verifyADR36Amino} from "@keplr-wallet/cosmos";
import {decodeSignature} from "@cosmjs/launchpad";

const app = express();
const port = 30000;

app.set('etag', false)
app.use(express.urlencoded())
app.use(express.json())

app.post('/verify/:bech32_prefix/:wallet/', (req, res) => {
    const {pubkey: decodedPubKey, signature: decodedSignature} = decodeSignature(req.body.signature);
    let verified = false;

    try {
        verified = verifyADR36Amino(
            req.params.bech32_prefix,
            req.params.wallet,
            req.body.data,
            decodedPubKey,
            decodedSignature);
    } catch (ex) {
        // console.log("Invalid signature", ex);
    }

    res.status(200);
    res.contentType("application/json");
    res.send({"valid": verified})
    return res;

});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
