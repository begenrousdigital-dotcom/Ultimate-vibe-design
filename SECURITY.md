# Security Policy

This repository contains documentation, design skills, and example code. It does not contain production software with active threat surface. However, the example code (`examples/*.tsx`) could be used as a starting point in production applications, so security feedback on the examples is welcomed.

## Supported versions

| Version | Supported |
|---------|-----------|
| 1.x     | ✅        |
| < 1.0   | ❌        |

## What counts as a security issue here

- An example in `examples/` contains a pattern that could lead to XSS, CSRF, insecure handling of user input, or unsafe defaults if copied into production.
- A recommended library version in any skill file has a known critical CVE.
- A token preset or CSS recommendation could enable a clickjacking, UI-redress, or accessibility-disabling attack.

## What doesn't count

- Style preferences ("I don't like this pattern").
- Performance issues (open a regular issue).
- Bugs in dependencies of the example code that aren't reproducible here.

## How to report

For anything that could reasonably be exploited if a developer copied an example into production:

**Email:** security@begenerous.digital

Include:
- Which file and line(s) are affected.
- A description of the attack vector.
- Suggested fix if you have one.

We'll respond within 5 business days, acknowledge the report, and credit you in the fix unless you prefer to remain anonymous.

## Disclosure

We follow coordinated disclosure. Please give us a reasonable window to fix the issue before publishing details — typically 30 days, longer if a more involved fix is needed. We will not threaten or pursue legal action against researchers acting in good faith.
