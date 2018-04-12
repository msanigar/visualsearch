import fetch from 'node-fetch';
const OAuth = require('oauth-1.0a');
const crypto = require('crypto');
var winston = require('winston');
winston.level = 'debug'


function hashFunctionSHA1(baseString, key) {
  return crypto.createHmac('sha1', key).update(baseString).digest('base64');
}

const oauth = OAuth({
  consumer: {
    key: 'd6d2a046e79b37d5b4b7fffee62144e9',
    secret: '1c3b43d68392cfee91a8b8f519b2bcab',
  },
  signature_method: 'HMAC-SHA1',
  hash_function: hashFunctionSHA1,
});

const token = {
  key: 'bb94a2a58b23d7611568d87a70735e4e',
  secret: 'dfe525ba3a8d2f57742b284d577ad493',
};

function getHeaders(requestData) {
  const headers = Object.assign({},
    {
      'content-type': 'application/json',
      'Accept': '*/*',
    },
    oauth.toHeader(oauth.authorize(requestData, token))
  );
  return headers
}

function checkHTTPStatus(res) {
  // FTM, only considering status 200 good...that could be overly restrictive
  if (res.status != 200) {
    // what do i do now??? I think the errors are buried in the response somewhere...but damned if i can find them!  really it would be ideal if this threw an object containing the errors so they would make their way back to the client.  AND THEN DOCUMENT ALL THE THINGS so the client has a half a chance of handling it
      throw `BAD STATUS: ${res.status}`
    }
  return res
}

export function mgFetchJSON(url) {
  const requestData = {
    url: url,
    method: 'GET',
  };

  winston.debug(new Date(), `fetch from ${requestData.url}`)

  const result = fetch(requestData.url, {
    headers: getHeaders(requestData),
  })
  .then(res => res.json())

  return result
}

/*
FIXME: The error handling in mgFetchJSON and mgPutJSON leaves much to be desired.  when there are errors in the response it does ok, but if there's just an error code, the message is 'unexpected end of JSON' which isn't really something the user can do anything about. One case where this happens is if the server returns an error (like 500), and the response.json() returns nothing (not even an empty object).  So its reporting an error (good), but it is a nonsensical low-level javascript type of error instead of the error: 500 (bad).
*/
export function mgPutJSON(url, jsonableObject) {

  const requestData = {
    url: url,
    method: 'PUT',
  };
  const body = JSON.stringify(jsonableObject)

  winston.debug(new Date(), `put to ${requestData.url}, body: `, body)

  const result = fetch(requestData.url, {
    method: requestData.method,
    headers: getHeaders(requestData),
    body: body,
  })
  .then(res => res.json())

  return result
}


export function arrayByStrippingKeys(obj) {
  return Object.values(obj);
}

export function objectByStrippingKey(obj) {
  const result = Object.values(obj);
  return result.length === 1 ? result[0] : {};
}

export function mgFetchMany(url) {
  return mgFetchJSON(url)
  .then(res => arrayByStrippingKeys(res))
}

export function mgFetchOne(url) {
  return mgFetchJSON(url)
  .then(res => objectByStrippingKey(res))
}
