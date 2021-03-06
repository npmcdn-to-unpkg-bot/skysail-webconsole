System.register(["@angular/core", "@angular/router", '@angular/common', '../../services/breadcrumbs.service', '../navbar/breadcrumb'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, breadcrumbs_service_1, breadcrumb_1;
    var Breadcrumbs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (breadcrumbs_service_1_1) {
                breadcrumbs_service_1 = breadcrumbs_service_1_1;
            },
            function (breadcrumb_1_1) {
                breadcrumb_1 = breadcrumb_1_1;
            }],
        execute: function() {
            Breadcrumbs = (function () {
                function Breadcrumbs(router, _breadcrumbsService, _route) {
                    var _this = this;
                    this.router = router;
                    this._breadcrumbsService = _breadcrumbsService;
                    this._route = _route;
                    this.router.events.subscribe(function () {
                        _breadcrumbsService.clear();
                        _breadcrumbsService.add(new breadcrumb_1.Breadcrumb(['/bundles'], '<i class="fa fa-home" aria-hidden="true"></i>'));
                        var val = _this.router.url;
                        var segements = val.split('/');
                        segements.forEach(function (segment) {
                            if (segment != '') {
                                _breadcrumbsService.add(new breadcrumb_1.Breadcrumb([segment], segment));
                            }
                        });
                        _this.breadcrumbs = _breadcrumbsService.getBreadcrumbs();
                    });
                }
                Breadcrumbs = __decorate([
                    core_1.Component({
                        selector: 'breadcrumbs',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.NgFor, common_1.NgFormModel],
                        providers: [breadcrumbs_service_1.BreadcrumbsService],
                        templateUrl: 'app/html/navbar/breadcrumbs.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, breadcrumbs_service_1.BreadcrumbsService, router_1.ActivatedRoute])
                ], Breadcrumbs);
                return Breadcrumbs;
            }());
            exports_1("Breadcrumbs", Breadcrumbs);
        }
    }
});

//# sourceMappingURL=breadcrumbs.component.js.map
