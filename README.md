# angularjs-easy-ui-access-directive
Quick and easy way to enable and disable user controls by assigning required group names to elements.

I needed to create an easy way to turn user controls on and off based on groups the current user is subscribed to.

The directive assumes a service called 'UserInfoService' exists and is injected.  That service should provide a function that gets member groups the user is subscribed to - either from a service call or saved in the session.  Then when you want to turn an element off to users who arent subscribed to a specific group you just add the following attribute to an element with a comma separated list of group names that are required like so:

```html
<button type="button" access-requirements="admin, super">Important Button</button>
```
In that scenario only users who are members of the admin or super groups will have access to that button - for everyone else it will be disabled.

From the provided example file:
```html
<body ng-controller="mycontroller">
  <div>
    The user is subscribed to the following groups:
    <ul>
        <li ng-repeat="group in member_groups">{{ group }}</li>
    </ul>
  </div>
  
  <div>
    <div>Important Button 1 requires any of the following groups: super, developer</div>
    <br>
    <div><button type="button" access-requirements="super, developer">Important Button</button></div>
  </div>
  <br><hr><br>
  <div>
    <div>Important Button 2 requires any of the following groups: admin, super</div>
    <br>
    <div><button type="button" access-requirements="admin, super">Important Button 2</button></div>
  </div>
</body>
```

![alt text](https://raw.githubusercontent.com/mvcuccaro/angularjs-easy-ui-access-directive/003655821089b2ff86b32447e7ad0c892c912cd4/screenshots/angular-easy-ui-access-directive-screenshot.png)

Remember - user interface interface security is no substitute for server side back end security.  This is only provided as an easy way create implied security in controls for real security that should be enabled elsewhere. 
