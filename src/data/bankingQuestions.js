import { GFG, TUTORIALS, BROWSERSTACK } from './sources'

export const bankingQuestions = [
  {
    question: 'What is SWIFT?',
    answer:
      'SWIFT (Society for Worldwide Interbank Financial Telecommunication) is a global messaging network used by banks and financial institutions to exchange standardized payment and securities instructions securely. It is not a payment system itself — it carries messages; settlement happens through correspondent banks, central banks, or clearing systems.\n\nMembers connect via SWIFTNet using BIC (Bank Identifier Code) to route messages. For QA, you validate that outbound/inbound messages conform to format rules, contain correct BICs, amounts, currencies, and reference fields, and that the application maps UI/API input correctly into SWIFT fields.',
    source: GFG('introduction-to-swift'),
  },
  {
    question: 'Difference between MT and MX messages.',
    answer:
      'MT (Message Type) is the legacy SWIFT FIN format — fixed-length, tag-based text (e.g. :20:, :32A:). Examples: MT103 (customer credit transfer), MT202 (bank transfer). Human-readable in logs but harder to extend and validate programmatically.\n\nMX (ISO 20022 XML) is the modern format — structured XML with XSD schemas, richer data (remittance, structured addresses), and better straight-through processing. CBPR+ and many corridors now mandate MX. In testing, MT checks focus on tag presence/length/format; MX checks add schema validation, namespace, and element business rules.',
    source: GFG('swift-mt-vs-mx'),
  },
  {
    question: 'ISO 20022?',
    answer:
      'ISO 20022 is an international standard for financial messaging that defines a common data dictionary and XML/ASN.1 message models (e.g. pacs.008 for credit transfer, camt.053 for statements). It enables richer, structured payment data and global interoperability.\n\nFor QA in banking: validate messages against published XSDs, check mandatory elements (Debtor, Creditor, Amount, EndToEndId), verify mapping from internal payment objects to ISO elements, and regression-test when the bank upgrades schema versions (e.g. CBPR+ profile constraints).',
    source: TUTORIALS('/iso_20022/index.htm'),
  },
  {
    question: 'What message types have you worked on?',
    answer:
      'Tailor this to your experience. Common types QA teams test in payment projects:\n\nCustomer payments: MT103 / pacs.008 (single customer credit transfer). Bank transfers: MT202 / pacs.009 (financial institution transfer). Status: MT199, pacs.002 (payment status), camt.054/053 (notifications/statements). Investigations: MT192/MT196 or camt.056 (cancellation/recall).\n\nIn the interview, name 2–3 you actually tested, what module generated/consumed them, and what you validated — field mapping, amounts, charges (OUR/BEN/SHA), value date, and end-to-end reference across UI → core banking → SWIFT out.',
    source: GFG('swift-message-types'),
  },
  {
    question: 'Explain payment lifecycle.',
    answer:
      'Typical cross-border/customer payment lifecycle:\n\n1. Initiation — client or operations enters payment (portal, file upload, API). 2. Validation — format, mandatory fields, limits, sanctions, account status. 3. Routing — determine nostro/correspondent path and message type. 4. Authorization — maker-checker or straight-through if rules pass. 5. Messaging — generate MT/MX and send via SWIFT/interface. 6. Clearing/settlement — funds move at beneficiary bank (may be T+0 to T+2). 7. Status updates — ACK/NACK, settlement confirmation, exceptions. 8. Reconciliation — match internal ledger with SWIFT confirmations and statements.\n\nAs QA, you test each gate: invalid data rejected early, approved payments produce correct messages, status API/UI matches back-office state.',
    source: GFG('payment-life-cycle'),
  },
  {
    question: 'What validations did you perform?',
    answer:
      'Functional: amount/currency precision, debit/credit account rules, cut-off times, holiday calendars, duplicate reference detection, charge bearer, FX rate application.\n\nMessage-level: SWIFT field lengths, allowed character sets, BIC format, mandatory tags/elements, MT vs MX profile rules (CBPR+).\n\nCompliance: sanctions screening hits, PEP flags, country restrictions. Integration: API request/response vs generated message file, database posting, queue handoff.\n\nNegative testing: missing IBAN, invalid BIC, over limit, closed account, screening block — expect clear error codes and no partial posting.',
    source: BROWSERSTACK('api-testing-interview-questions'),
  },
  {
    question: 'What is UAT in banking?',
    answer:
      'User Acceptance Testing in banking is business-led validation that the system meets operational and regulatory requirements before production go-live. Participants often include operations, payments specialists, compliance, and sometimes treasury — not only IT QA.\n\nScope: real-world scenarios (high-value payment, recall, returns, cut-off edge cases), reconciliation reports, audit trails, and sign-off on message samples sent to SWIFT test environment or bank sandbox. QA supports UAT with test data, defect triage, evidence packs, and retest after fixes. Success criteria: zero critical defects, signed test summary, and parallel run results matching legacy if migrating.',
    source: GFG('user-acceptance-testing'),
  },
  {
    question: 'Explain sanctions screening.',
    answer:
      'Sanctions screening compares payment parties (ordering customer, beneficiary, banks, intermediaries) and sometimes payment reference text against government and internal watchlists (OFAC, EU, UN, etc.) before release.\n\nFlow: payment captured → screening engine called (in-house or vendor) → match score/hit → auto-release, false-positive workflow, or hard stop. QA tests: exact name match, fuzzy match, alias, secondary sanctions, country embargo, rescreening on amendment, and audit log of who released a hit. Never use real sanctioned names in lower environments — use approved test personas from compliance.',
    source: GFG('aml-kyc-in-banking'),
  },
  {
    question: 'What happens if payment fails?',
    answer:
      'Failure can occur at validation, authorization, messaging (SWIFT NACK), settlement, or beneficiary rejection. System should: stop or reverse debit if not yet settled, set transaction status (Failed/Rejected/Returned), store reason code (ISO reason or internal code), notify operations/customer, and allow repair or re-initiation per policy.\n\nQA verifies: no double debit, status consistency across UI/API/DB, correct exception queue entry, alert/email if configured, and that failed payments appear in ops dashboards and reconciliation exceptions. Retest recall/return flows if funds already left nostro account.',
    source: GFG('payment-processing'),
  },
  {
    question: 'Explain settlement flow.',
    answer:
      'Settlement is the actual transfer of funds between banks to fulfill a payment instruction. In correspondent banking, ordering bank debits customer, credits nostro at intermediary, beneficiary bank credits end customer — often via MT202/pacs.009 chains.\n\nQA focuses on: correct nostro selection, value date, settlement method (gross vs net), alignment with message amount, and status transition to Settled/Completed when camt/MT910 or internal confirmation received. Test partial settlements, delays, and mismatch between instructed amount and settled amount (FX, fees).',
    source: GFG('bank-settlement-process'),
  },
  {
    question: 'Explain transaction status flow.',
    answer:
      'Typical statuses: Draft → Submitted → Pending Validation → Pending Approval → Approved → Sent to SWIFT → Acknowledged → In Progress → Settled → Completed (or Rejected/Failed/Returned/Cancelled).\n\nEach transition should be auditable with timestamp and user/system id. QA validates: status API matches DB, UI timeline correct, invalid transitions blocked (e.g. cannot approve after reject), and webhook/event consumers get same status. Regression on status polling and bulk file payments where thousands update asynchronously.',
    source: GFG('transaction-life-cycle'),
  },
  {
    question: 'What are message queues?',
    answer:
      'Message queues (e.g. IBM MQ, RabbitMQ, Kafka in modern stacks) decouple payment components — front office, core banking, SWIFT gateway, screening, reporting — so spikes and downstream slowness do not crash upstream.\n\nPayments are published as messages; consumers process asynchronously with retry and dead-letter queues (DLQ). QA tests: message not lost on restart, poison message goes to DLQ, idempotent reprocessing, ordering where required, and correlation IDs linking queue payload to payment reference. Monitor queue depth alerts in production-like load tests.',
    source: GFG('message-queue-system'),
  },
  {
    question: 'What production issues did you see?',
    answer:
      'Answer with sanitized real examples if you have them. Common production issues in payments QA support:\n\nCut-off misconfiguration causing payments stuck in Pending. Wrong BIC/nostro after reference data update. Duplicate file processing without idempotency key. Timezone/value date off by one day. Screening timeout releasing late. MX schema validation failure after SWIFT rulebook upgrade.\n\nDescribe your role: reproduce in lower env, gather logs/SWIFT traces, compare message before/after fix, verify hotfix in prod support window, and add regression automation or monitoring.',
    source: BROWSERSTACK('production-testing'),
  },
  {
    question: 'What is reconciliation?',
    answer:
      'Reconciliation matches internal transaction records against external evidence — SWIFT confirmations (MT900/910, camt), nostro statements, clearing house files — to ensure every payment is accounted for and balances agree.\n\nTypes: intraday (exceptions), EOD nostro reconciliation, fee/charge reconciliation. QA validates report accuracy, unmatched item workflows, break reasons, and that retried/settled payments clear breaks. Test scenarios: missing confirmation, amount mismatch, duplicate entry, late statement line.',
    source: GFG('bank-reconciliation'),
  },
  {
    question: 'What is STP (Straight Through Processing)?',
    answer:
      'STP means payments flow from initiation to messaging/settlement with no manual intervention when all automated checks pass — validation, limits, sanctions, routing, and message generation.\n\nSTP rate is a key KPI. QA improves STP by exhaustive negative testing (fail fast with clear errors) and positive path coverage so valid payments never land in ops queues incorrectly. Test that manual queue only receives true exceptions (screening hit, missing nostro, format error), not data bugs fixable in software.',
    source: GFG('straight-through-processing'),
  },
  {
    question: 'Explain cross-border payments.',
    answer:
      'Cross-border payments move funds between accounts in different countries, often involving currency conversion, correspondent banks, and compliance (sanctions, AML reporting). Messages may chain MT103 + MT202 or ISO pacs.008/009 with routing via intermediary BICs.\n\nQA covers: IBAN/account format per country, SWIFT BIC routing, FX rates and charges, regulatory reporting fields (purpose of payment), cut-offs per corridor, and longer settlement timelines. Test USD/EUR/GBP corridors and edge cases like payments to countries with capital controls.',
    source: GFG('cross-border-payments'),
  },
  {
    question: 'Difference between SWIFT MT103 and MT202.',
    answer:
      'MT103 is a single customer credit transfer — contains ordering customer, beneficiary, remittance info, amount; used when bank pays end customer on behalf of client.\n\nMT202 is a general financial institution transfer — bank-to-bank only, no detailed customer fields; used to move funds between nostro accounts, often as cover payment for an MT103.\n\nIn testing: MT103 has field 50/59 (ordering/beneficiary); MT202 uses field 52/58 (ordering/beneficiary institution). Verify correct pairing in cover payment scenarios and that amounts and references link both messages.',
    code: [{ language: 'text', snippet: '{1:F01BANKUS33AXXX0000000000}{2:I103BANKDEFFXXXXN}{3:{108:REF12345}}{4:\n:20:TXNREF001\n:23B:CRED\n:32A:240531USD10000,\n:50K:/123456789\nJOHN DOE\n:59:/DE89370400440532013000\nJANE SMITH\n-}' }],
    source: GFG('swift-mt103'),
  },
  {
    question: 'What is CBPR+?',
    answer:
      'CBPR+ (Cross-Border Payments and Reporting Plus) is SWIFT\'s harmonized ISO 20022 usage guideline for cross-border payments on SWIFT, replacing many MT messages with constrained MX (pacs/camt) to improve STP globally.\n\nKey for QA: messages must comply with CBPR+ implementation guidelines — restricted optional elements, specific code sets, character sets, and network-validated rules beyond base XSD. Test migration projects: dual MT/MX period, translation accuracy, and SWIFT gpi tracker fields where applicable.',
    source: GFG('iso-20022-cbpr'),
  },
  {
    question: 'How did you validate XML messages?',
    answer:
      'Multi-layer validation:\n\n1. Well-formed XML — parser loads without error. 2. XSD schema validation — pacs.008 / camt versions match environment. 3. Business rules — CBPR+, bank-specific rules (amount > 0, currency ISO4217, BIC pattern). 4. Golden file comparison — hash or diff against approved sample. 5. SWIFT pre-validator or alliance access test ACK/NACK.\n\nAutomation: Python lxml/xmlschema, Java JAXB with schema validator, or dedicated tools in CI. Store expected outputs per test case; on failure attach full XML to defect ticket.',
    code: [{ language: 'python', snippet: "from lxml import etree\n\nschema = etree.XMLSchema(etree.parse('pacs.008.001.08.xsd'))\ntree = etree.parse('generated_payment.xml')\nassert schema.validate(tree), schema.error_log" }],
    source: GFG('xml-validation'),
  },
]
