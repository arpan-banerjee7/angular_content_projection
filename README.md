
# It demonstrates how content projection works in angular.
### There are two reusable components--
1. ExpansionComponent
2. ExpansionTemplateComponent

**ClockComponent** is projected using two approaches in these two components.
Inside the first coponent it is projected using `<ng-content></ng-content>`  directive.
Inside the second coponent it is projected using `<ng-template></ng-tenplate>`  directive.


When the app loads, you can see a `toggle button` and below it the **second component**. On clicking the button it renders the first component dynamically.
To understand the behaviour of `content projection` in angular, open the *developer tools* and have a look at the *console*.

### Now there is a catch while using `<ng-content></ng-content>`
But, what happens if you close and reopen the expander after 5 minutes? It still displays 9:51, why is that?
The source of the problem is how `ng-content` life-cycle hook calls itself.
Even though our `clock component` isn’t yet rendered (the `ngIf` expression of the `expansion` is still `false`) the `ngOnInit` lifecycle hook is already called.

You can see that neither the `ngOninit` nor the `ngOnDestroy` life-cycle hooks are called upon toggling the *content*  **by clicking the header of the component.**
Thus even if the `ExpansionComponent` is completeley removed from the DOM `ngOnDestroy` is not called, and when it is added back to the DOM `ngOniti` is not called.

Now if you click the `Button` which says *update time* , then it toggles the entire component. So, the parent component inside whom we were projecting the `clock component` is 
removed and added back to the DOM.

Now if you look at the console, then you can see `ngOninit` nor the `ngOnDestroy` life-cycle hooks are called, and the time gets udpated.

This behaviour is due to the fact--

We can see that every time our expansion panel is rendered or removed, the life-cycle hooks of our projected content is called.
The life-cycle hooks of the projected content are bound to the life-cycle of the host.

This can be solved by using `<ng-template></ng-tenplate>`  directive.

1. First, we add a new @Input that accepts a TemplatRef , which is our content.
2. Then we adjust the expander's HTML to render the received content. As I have done in the `ExpansionTemplateComponent`
3. We now wrap the clock component inside a ng-template. We then use a template reference to pass this content down to our expander component.

 So, it is advised to use 'ng-template' once you find your `ng-content` wrapped with an ngIf .


####################################################################################################
# ReusableExp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

