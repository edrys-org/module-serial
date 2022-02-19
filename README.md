# Edrys Serial Module

This module uses WebSerial to allow access to a live serial terminal hosted by a station. It is useful for creating Remote Labs (eg. allowing students to access an Arduino serial terminal remotely).

Currently [not all browsers support WebSerial](https://caniuse.com/web-serial), we recommend Chromium.

## Usage

Simply use this URL to add the module to your class:

```
https://edrys-org.github.io/module-serial/
```

This module only works in stations (not normal Edrys rooms), so launch a station and join it to start. You will need to set a baud rate and connect at the station end.