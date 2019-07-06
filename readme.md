# About

Today it does not work.

> angularapp.js:545 Unhandled Promise rejection: Maximum call stack size exceeded ; Zone: <root> ; Task: null ; Value: RangeError: Maximum call stack size exceeded

    at t.scheduleMicroTask (angularapp.js:273)
    at C (angularapp.js:691)
    at R.then (angularapp.js:779)
    at g (angularapp.js:451)
    at a.scheduleTask (angularapp.js:348)
    at t.scheduleTask (angularapp.js:264)
    at t.scheduleMicroTask (angularapp.js:273)
    at C (angularapp.js:691)
    at R.then (angularapp.js:779)
    at g (angularapp.js:451) RangeError: Maximum call stack size exceeded
    at t.scheduleMicroTask (webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./NgNumberInput/libs/angularapp.js?:273:38)
    at C (webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./NgNumberInput/libs/angularapp.js?:691:11)
    at R.then (webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./NgNumberInput/libs/angularapp.js?:779:60)
    at g (webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./NgNumberInput/libs/angularapp.js?:451:32)
    at a.scheduleTask (webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./NgNumberInput/libs/angularapp.js?:348:13)
    at t.scheduleTask (webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./NgNumberInput/libs/angularapp.js?:264:38)
    at t.scheduleMicroTask (webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./NgNumberInput/libs/angularapp.js?:273:25)
    at C (webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./NgNumberInput/libs/angularapp.js?:691:11)
    at R.then (webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./NgNumberInput/libs/angularapp.js?:779:60)
    at g (webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./NgNumberInput/libs/angularapp.js?:451:32)

# References

https://blog.bitsrc.io/using-angular-elements-why-and-how-part-1-35f7fd4f0457

https://docs.microsoft.com/en-us/powerapps/developer/component-framework/implementing-controls-using-typescript
