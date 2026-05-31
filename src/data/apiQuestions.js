import { GFG, TUTORIALS, BROWSERSTACK } from './sources'

export const apiQuestions = [
  {
    question: 'What is API testing?',
    answer:
      'API testing validates application programming interfaces directly — business logic layer — without UI. Tests request/response, status codes, headers, payload structure, error handling, and performance.\n\nFaster and more stable than UI tests. Catches bugs earlier. Essential for microservices and mobile backends.',
    source: GFG('api-testing-interview-questions'),
  },
  {
    question: 'Difference between SOAP and REST.',
    answer:
      'SOAP: XML-only, strict standards (WSDL), built-in security (WS-Security), stateful possible, heavier payloads. Used in enterprise/banking legacy systems.\n\nREST: architectural style, uses HTTP methods, supports JSON/XML, lightweight, stateless, cacheable. Dominant in modern web and mobile APIs.',
    source: GFG('difference-between-soap-and-rest-web-services'),
  },
  {
    question: 'GET vs POST vs PUT vs PATCH vs DELETE.',
    answer:
      'GET — retrieve data, idempotent, no body (typically), cacheable.\nPOST — create resource, not idempotent.\nPUT — replace entire resource, idempotent.\nPATCH — partial update, idempotent.\nDELETE — remove resource, idempotent.\n\nIdempotent = same request repeated produces same result.',
    code: [{ language: 'python', snippet: "import requests\n\nrequests.get('https://api.example.com/users/1')\nrequests.post('https://api.example.com/users', json={'name': 'Akash'})\nrequests.put('https://api.example.com/users/1', json={'name': 'Akash', 'role': 'QA'})\nrequests.patch('https://api.example.com/users/1', json={'role': 'Lead'})\nrequests.delete('https://api.example.com/users/1')" }],
    source: GFG('http-methods-get-post-put-patch-delete'),
  },
  {
    question: 'Status codes.',
    answer:
      '1xx Informational — 100 Continue\n2xx Success — 200 OK, 201 Created, 204 No Content\n3xx Redirection — 301 Moved, 302 Found, 304 Not Modified\n4xx Client Error — 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable\n5xx Server Error — 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable\n\nIn tests: always assert expected status code first.',
    source: GFG('http-status-codes'),
  },
  {
    question: 'Authentication types.',
    answer:
      'Common API authentication methods:\n\n1. API Key — key in header or query param\n2. Basic Auth — Base64(username:password) in Authorization header\n3. Bearer Token — token in Authorization: Bearer <token>\n4. OAuth 2.0 — delegated access via access tokens\n5. JWT — self-contained signed token\n6. Session/Cookie — session ID after login',
    source: GFG('api-authentication-methods'),
  },
  {
    question: 'Bearer token?',
    answer:
      'Bearer token authentication sends a token in the Authorization header. The server validates the token on each request. Format: Authorization: Bearer <access_token>.\n\nToken is obtained from login/auth endpoint. Store securely in environment variables, not in source code. Tokens often expire — handle refresh flow.',
    code: [{ language: 'python', snippet: "import requests\n\nheaders = {\n    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIs...',\n    'Content-Type': 'application/json'\n}\nresp = requests.get('https://api.example.com/profile', headers=headers)\nassert resp.status_code == 200" }],
    source: GFG('bearer-token-authentication'),
  },
  {
    question: 'OAuth?',
    answer:
      'OAuth 2.0 is an authorization framework — allows apps to access user resources without sharing passwords. Roles: Resource Owner, Client, Authorization Server, Resource Server.\n\nFlows: Authorization Code (most secure for web apps), Client Credentials (machine-to-machine), Password Grant (legacy, avoid). Returns access_token and optionally refresh_token.',
    source: GFG('oauth-2-0-protocol'),
  },
  {
    question: 'Headers and payloads.',
    answer:
      'Headers carry metadata: Content-Type, Authorization, Accept, Cache-Control, custom headers (X-Request-ID).\n\nPayload (body): data sent with POST/PUT/PATCH — usually JSON in REST APIs.\n\nContent-Type: application/json tells server how to parse body. Accept header specifies expected response format.',
    code: [{ language: 'python', snippet: "headers = {\n    'Content-Type': 'application/json',\n    'Accept': 'application/json',\n    'Authorization': 'Bearer <token>'\n}\npayload = {'username': 'testuser', 'password': 'secret'}\nresp = requests.post(url, json=payload, headers=headers)" }],
    source: GFG('http-headers'),
  },
  {
    question: 'JSON vs XML.',
    answer:
      'JSON: lightweight, human-readable, native to JavaScript, faster to parse, dominant in REST APIs. Types: string, number, boolean, null, array, object.\n\nXML: verbose, schema support (XSD), namespaces, still used in SOAP/banking (SWIFT MX). Better for complex document structures with strict validation.\n\nFor automation: json.loads() / response.json() in Python.',
    source: GFG('json-vs-xml'),
  },
  {
    question: 'What is serialization/deserialization?',
    answer:
      'Serialization: convert object/data structure to storable/transmittable format (JSON string, XML). Deserialization: convert back to object.\n\nIn API testing: request body is serialized to JSON before sending; response JSON is deserialized to Python dict for assertions.',
    code: [{ language: 'python', snippet: "import json\n\n# Serialize\ndata = {'id': 1, 'status': 'PASS'}\njson_str = json.dumps(data)\n\n# Deserialize\nparsed = json.loads('{\"id\": 1, \"status\": \"PASS\"}')\nassert parsed['status'] == 'PASS'" }],
    source: GFG('serialization-in-python'),
  },
  {
    question: 'How do you validate response?',
    answer:
      'Validate at multiple levels:\n\n1. Status code — assert 200, 201, 404, etc.\n2. Response time — assert < threshold\n3. Headers — Content-Type, custom headers\n4. Body — field values, data types, array length\n5. Schema — JSON Schema validation\n6. Business rules — DB cross-check, downstream API state',
    code: [{ language: 'python', snippet: "resp = requests.get(url)\n\nassert resp.status_code == 200\nassert resp.elapsed.total_seconds() < 2\n\ndata = resp.json()\nassert data['status'] == 'SUCCESS'\nassert 'transactionId' in data\nassert isinstance(data['amount'], (int, float))" }],
    source: GFG('api-response-validation'),
  },
  {
    question: 'What tools have you used?',
    answer:
      'Common API testing tools:\n\nManual/Exploratory: Postman, Insomnia, Swagger UI\nAutomation: Python requests + pytest, REST Assured (Java), Karate DSL\nPerformance: JMeter, k6\nMocking: WireMock, MockServer\nDocumentation: Swagger/OpenAPI\n\nMention what you used and for what purpose (manual vs CI automation).',
    source: GFG('api-testing-tools'),
  },
  {
    question: 'How do you automate APIs using Python?',
    answer:
      'Use requests library + pytest. Structure: test data (JSON/Excel), API client wrapper class, assertions, fixtures for auth token and base URL.\n\nPattern: arrange (setup data) → act (send request) → assert (status + body). Report with Allure or HTML plugins.',
    code: [{ language: 'python', snippet: "import requests\nimport pytest\n\nBASE_URL = 'https://api.example.com'\n\ndef test_get_user():\n    resp = requests.get(f'{BASE_URL}/users/1')\n    assert resp.status_code == 200\n    assert resp.json()['id'] == 1\n\ndef test_create_user():\n    payload = {'name': 'Test', 'email': 't@example.com'}\n    resp = requests.post(f'{BASE_URL}/users', json=payload)\n    assert resp.status_code == 201" }],
    source: GFG('api-testing-using-python-requests'),
  },
  {
    question: 'How do you chain APIs?',
    answer:
      'Chain APIs when one response feeds the next request — e.g., login → get token → create order → verify status.\n\nStore token from login response, pass to subsequent headers. Use pytest fixtures or session-scoped setup. Each step asserts success before proceeding.',
    code: [{ language: 'python', snippet: "def test_payment_flow():\n    # Step 1: Login\n    login = requests.post(f'{BASE}/auth/login',\n        json={'user': 'test', 'pass': 'secret'})\n    token = login.json()['access_token']\n    headers = {'Authorization': f'Bearer {token}'}\n\n    # Step 2: Create payment\n    pay = requests.post(f'{BASE}/payments',\n        json={'amount': 100}, headers=headers)\n    pay_id = pay.json()['id']\n\n    # Step 3: Verify status\n    status = requests.get(f'{BASE}/payments/{pay_id}', headers=headers)\n    assert status.json()['state'] == 'COMPLETED'" }],
    source: GFG('api-chaining-in-automation'),
  },
  {
    question: 'How do you validate schema?',
    answer:
      'JSON Schema defines expected structure — field types, required fields, formats. Validate with jsonschema library in Python or built-in checks in Postman.\n\nCatches unexpected API contract changes early. Store schemas in version control alongside tests.',
    code: [{ language: 'python', snippet: "import jsonschema\n\nschema = {\n    'type': 'object',\n    'required': ['id', 'status'],\n    'properties': {\n        'id':     {'type': 'integer'},\n        'status': {'type': 'string', 'enum': ['PASS', 'FAIL']}\n    }\n}\n\njsonschema.validate(instance=resp.json(), schema=schema)" }],
    source: GFG('json-schema-validation-in-python'),
  },
  {
    question: 'Difference between functional and integration API testing.',
    answer:
      'Functional API testing: validates individual endpoints against requirements — correct status, response fields, error messages for given input.\n\nIntegration API testing: validates interaction between services — payment service calls auth service, message queue triggers, database state after API call.\n\nFunctional = single API in isolation. Integration = multiple components together.',
    source: GFG('integration-testing-vs-functional-testing'),
  },
  {
    question: 'How do you handle dynamic tokens?',
    answer:
      '1. Login fixture — call auth API before tests, store token in variable or pytest fixture\n2. Session object — requests.Session() persists cookies/tokens\n3. Environment variables — token from CI secrets\n4. Refresh token flow — auto-refresh when access token expires\n5. conftest.py — session-scoped fixture provides token to all tests',
    code: [{ language: 'python', snippet: "import pytest\nimport requests\n\n@pytest.fixture(scope='session')\ndef auth_token():\n    resp = requests.post(f'{BASE}/auth/token',\n        json={'client_id': os.getenv('CLIENT_ID'),\n              'secret': os.getenv('CLIENT_SECRET')})\n    return resp.json()['access_token']\n\ndef test_profile(auth_token):\n    headers = {'Authorization': f'Bearer {auth_token}'}\n    resp = requests.get(f'{BASE}/profile', headers=headers)\n    assert resp.status_code == 200" }],
    source: GFG('how-to-handle-authentication-in-api-testing'),
  },
  {
    question: 'What is contract testing?',
    answer:
      'Contract testing verifies that API provider and consumer agree on request/response format without running full integration. Consumer defines expected contract; provider tests confirm they meet it.\n\nTools: Pact. Benefits: catch breaking changes early, test services independently, faster than end-to-end.',
    source: GFG('contract-testing-in-microservices'),
  },
]
