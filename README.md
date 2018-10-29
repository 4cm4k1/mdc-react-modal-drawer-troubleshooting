# mdc-react-modal-drawer-troubleshooting

If I am not mistaken, there seems to be a bug in the implementation of `focus-trap-react` in`@material/react-drawer`. Activating the modal variant of the drawer causes `react` to crash and attempt to recreate the component tree unsuccessfully, with the below console output. I have reproduced this both in this example repository and my [personal website's repo](https://github.com/4cm4k1/website) in development and production modes. I have done my best in following the documentation, which currently isn't the greatest and has several typographical errors in variable/function naming. I've also tried troubleshooting this myself, but without much success. Notably, by setting manually `focusTrapOptions` values all to `true`, I prevented the crash, but it then results in Chrome killing a call stack that maxes out, which hints at a looping issue. Then, I looked at `focus-trap`'s docs and found that `initialFocus` should not be set as a Boolean [as it is here](https://github.com/material-components/material-components-web-react/blob/master/packages/drawer/index.js#L155). However, I'm finding the layers of abstraction a little bit hard to follow, so that's why I'm raising the issue here. I don't know how to solve this. :P

## How to use

1. `yarn install`
2. `yarn dev` (hot-module reloading with Webpack and Next.js)
3. `yarn build && yarn start` (build and serve in production mode)

## Error output

### Dev mode

```shell
Uncaught Error: You can't have a focus-trap without at least one focusable element
    at getInitialFocusNode (VM1105 index.js:214)
    at updateTabbableNodes (VM1105 index.js:222)
    at Object.activate (VM1105 index.js:211)
    at FocusTrap.componentDidMount (VM1105 index.js:906)
    at commitLifeCycles (VM1117 react-dom.development.js:15255)
    at commitAllLifeCycles (VM1117 react-dom.development.js:16523)
    at HTMLUnknownElement.callCallback (VM1117 react-dom.development.js:149)
    at Object.invokeGuardedCallbackDev (VM1117 react-dom.development.js:199)
    at invokeGuardedCallback (VM1117 react-dom.development.js:256)
    at commitRoot (VM1117 react-dom.development.js:16677)
    at completeRoot (VM1117 react-dom.development.js:18069)
    at performWorkOnRoot (VM1117 react-dom.development.js:17997)
    at performWork (VM1117 react-dom.development.js:17901)
    at performSyncWork (VM1117 react-dom.development.js:17873)
    at batchedUpdates$1 (VM1117 react-dom.development.js:18108)
    at batchedUpdates (VM1117 react-dom.development.js:2198)
    at dispatchEvent (VM1117 react-dom.development.js:4939)
```

```shell
The above error occurred in the <FocusTrap> component:
    in FocusTrap (created by Drawer)
    in aside (created by Drawer)
    in Drawer (at pages/index.js:20)
    in Home (created by App)
    in Container (created by App)
    in App

React will try to recreate this component tree from scratch using the error boundary you provided, App.
```

### Prod mode

```shell
Error: You can't have a focus-trap without at least one focusable element
    at h (index.js:58)
    at E (index.js:58)
    at Object.activate (index.js:58)
    at t.value (index.js:308)
    at Ia (commons.2a89c77150ec82f381ee.js:22)
    at ja (commons.2a89c77150ec82f381ee.js:22)
    at Oa (commons.2a89c77150ec82f381ee.js:22)
    at Aa (commons.2a89c77150ec82f381ee.js:22)
    at Ue (commons.2a89c77150ec82f381ee.js:22)
    at Nn (commons.2a89c77150ec82f381ee.js:22)
```
