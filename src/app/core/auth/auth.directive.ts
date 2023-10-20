import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { AuthService } from "./auth.service";

@Directive({
    selector: '[appHideIfRole]'
})
export class HideIfRoleDirective {
    @Input() set appHideIfRole(allowedRoles: number[]) {
        const userRole = this.authService.getSession().rol;
        if (!allowedRoles.includes(userRole)) {
            this.viewContainerRef.clear();
        } else {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef,
        private authService: AuthService
    ) { }
}
