(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media print{\r\n body *{\r\n      display:none!important;\r\n      \r\n  }\r\n  \r\n}\r\n\r\n.page-margin-16{\r\n  margin-left:8%;\r\n}\r\n\r\n.page-margin-0{\r\n  margin-left:8%;\r\n}\r\n\r\n.page-margin-zero{\r\n  margin-left:0%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet name=\"orderHome1\"></router-outlet>\n<!-- Sidebar -->\n<div id=\"sideBar\"  style=\"display: none\" class=\"w3-sidebar w3-dark-grey w3-bar-block\" style=\"width:8%\" *ngIf=\"!this.MainSer.orderMode && !this.MainSer.customerOrderMode\">\n  <h4 class=\"w3-bar-item w3-bar-item-name\"><b>BM</b></h4>\n  <nav>\n    <a *ngIf=\"!this.MainSer.waiterMode\" routerLink=\"/home\" [ngClass]=\"{'active': tabId === 1 }\" class=\"w3-bar-item w3-button\" (click)=\"menuClick(1)\">Home</a>\n    <a *ngIf=\"ownerMode || bhukumShopMode\" routerLink=\"/selectBillingTable\" [ngClass]=\"{'active': tabId === 13 }\" class=\"w3-bar-item w3-button\" (click)=\"menuClick(13)\">Tbl Billing</a>\n    <a *ngIf=\"ownerMode || bhukumShopMode\" routerLink=\"/kitchenOrders\" [ngClass]=\"{'active': tabId === 12 }\" class=\"w3-bar-item w3-button\" (click)=\"menuClick(12)\">Kit Orders</a>\n    <a *ngIf=\"ownerMode || bhukumShopMode || this.MainSer.waiterMode\" routerLink=\"/selectTable\" [ngClass]=\"{'active': tabId === 4 }\" class=\"w3-bar-item w3-button\" (click)=\"menuClick(4)\">Sel Table</a>\n\n    <a *ngIf=\"ownerMode || bhukumShopMode\" routerLink=\"/report1\" [ngClass]=\"{'active': tabId === 2 }\" class=\"w3-bar-item w3-button\" (click)=\"menuClick(2)\">Reports</a>\n    <a *ngIf=\"ownerMode || bhukumShopMode\" routerLink=\"/addCalculation\" [ngClass]=\"{'active': tabId === 6 }\" class=\"w3-bar-item w3-button\" (click)=\"menuClick(6)\">Sale Cal.</a>\n    <a *ngIf=\"ownerMode || bhukumShopMode\" routerLink=\"/calculationReport\" [ngClass]=\"{'active': tabId === 7 }\" class=\"w3-bar-item w3-button\" (click)=\"menuClick(7)\">Cal. Report</a>\n    <a  *ngIf=\"ownerMode || bhukumShopMode\" routerLink=\"/employees\" [ngClass]=\"{'active': tabId === 3 }\" class=\"w3-bar-item w3-button\" (click)=\"menuClick(3)\">Employees</a>\n    <!--  <a routerLink=\"/searchEmployeesAdvance\" [ngClass]=\"{'active': tabId === 5 }\" class=\"w3-bar-item w3-button\" (click)=\"menuClick(5)\">Employees: Search Advance</a> -->\n    <a *ngIf=\"ownerMode || bhukumShopMode\" routerLink=\"/vendors\" [ngClass]=\"{'active': tabId === 10 }\" class=\"w3-bar-item w3-button\" (click)=\"menuClick(10)\">Vendors</a>\n    <a *ngIf=\"ownerMode || bhukumShopMode\" routerLink=\"/addPavEntry\" [ngClass]=\"{'active': tabId === 8 }\" class=\"w3-bar-item w3-button\" (click)=\"menuClick(8)\">Pav Entry</a>\n    <a *ngIf=\"ownerMode || bhukumShopMode\" routerLink=\"/pavReport\" [ngClass]=\"{'active': tabId === 9 }\" class=\"w3-bar-item w3-button\" (click)=\"menuClick(9)\">Pav Report</a>\n    <a *ngIf=\"ownerMode\" routerLink=\"/farsan\" [ngClass]=\"{'active': tabId === 11 }\" class=\"w3-bar-item w3-button\" (click)=\"menuClick(11)\">Farsan</a>\n\n\n  \n  \n\n <!--  <div class=\"w3-dropdown-hover\">\n      <button class=\"w3-bar-item w3-button\"  [ngClass]=\"{'active': tabId === 6 }\" (click)=\"menuClick(6)\">Vendor\n        <i class=\"fa fa-caret-down\"></i>\n      </button>\n      <div class=\"w3-dropdown-content w3-bar-block\">\n        <a href=\"#\" class=\"w3-bar-item w3-button\" routerLink=\"/addvendor\" [ngClass]=\"{'active': tabId === 5 }\" (click)=\"menuClick(5)\">Add Vendor</a>\n        <a href=\"#\" class=\"w3-bar-item w3-button\" routerLink=\"/vendorAddPaidBill\" [ngClass]=\"{'active': tabId === 5 }\" (click)=\"menuClick(4)\">Add Bill / Paid Bill</a>\n      </div>\n  </div>  -->\n <!-- <div class=\"w3-dropdown-hover\">\n    <button class=\"w3-bar-item w3-button\"  [ngClass]=\"{'active': tabId === 6 }\" (click)=\"menuClick(4)\">Sale Calculations\n      <i class=\"fa fa-caret-down\"></i>\n    </button>\n    <div class=\"w3-dropdown-content w3-bar-block\">\n      <a href=\"#\" class=\"w3-bar-item w3-button\" routerLink=\"/addCalculation\" [ngClass]=\"{'active': tabId === 6 }\" (click)=\"menuClick(4)\">Add Calculation</a>\n      <a href=\"#\" class=\"w3-bar-item w3-button\" routerLink=\"/calculationReport\" [ngClass]=\"{'active': tabId === 7 }\" (click)=\"menuClick(4)\">Report</a>\n    </div>\n</div> -->\n  </nav>\n</div>\n<!-- Page Content -->\n<div  *ngIf=\"!this.MainSer.customerOrderMode\" [ngClass]=\"{'page-margin-0': this.MainSer.orderMode, 'page-margin-16' : !this.MainSer.orderMode}\">\n\n  \n  \n <!-- <img src=\"img_car.jpg\" alt=\"Car\" style=\"width:100%\"> -->\n  \n  <div class=\"w3-container contentMargin\">\n      <router-outlet></router-outlet>\n  </div>\n  \n</div>\n\n<!-- Page Content For customer order only -->\n<div *ngIf=\"this.MainSer.customerOrderMode\" class=\"page-margin-zero\">\n\n  \n  \n  <!-- <img src=\"img_car.jpg\" alt=\"Car\" style=\"width:100%\"> -->\n   \n   <div class=\"w3-container contentMargin\">\n       <router-outlet></router-outlet>\n   </div>\n   \n </div>\n\n<div style=\"text-align:center\">\n  \n    <div>\n\n      \n      <div></div>\n      \n    </div>\n  \n</div>\n<!--\n    <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n\n  <h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>-->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(http, MainSer, cdref) {
        var _this = this;
        this.http = http;
        this.MainSer = MainSer;
        this.cdref = cdref;
        this.title = 'app';
        this.lastClick = 1;
        this.tabId = 1;
        this.managerMode = false;
        this.ownerMode = false;
        this.bhukumShopMode = false;
        this.subscription1 = this.MainSer.mangerMode.subscribe(function (value) {
            _this.managerMode = value;
        });
        this.subscription2 = this.MainSer.ownerMode.subscribe(function (value) {
            _this.ownerMode = value;
        });
        this.subscription3 = this.MainSer.bhukumShopMode.subscribe(function (value) {
            _this.bhukumShopMode = value;
        });
        this.cdref.detach();
    }
    AppComponent.prototype.menuClick = function (id) {
        this.tabId = id;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.MainSer.loadBeepAudio();
        this.MainSer.loadWaiterBeepAudio();
    };
    AppComponent.prototype.ngOnChange = function () {
    };
    AppComponent.prototype.ngAfterContentChecked = function () {
        this.cdref.detectChanges();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.subscription1)
            this.subscription1.unsubscribe();
        if (this.subscription2)
            this.subscription2.unsubscribe();
        if (this.subscription3)
            this.subscription3.unsubscribe();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./w3.css */ "./src/app/w3.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found-component/page-not-found-component.component */ "./src/app/page-not-found-component/page-not-found-component.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _report1_report1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./report1/report1.component */ "./src/app/report1/report1.component.ts");
/* harmony import */ var _vendor_vendor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vendor/vendor.component */ "./src/app/vendor/vendor.component.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _vendor_vendor_add_paid_bill_vendor_add_paid_bill_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vendor/vendor-add-paid-bill/vendor-add-paid-bill.component */ "./src/app/vendor/vendor-add-paid-bill/vendor-add-paid-bill.component.ts");
/* harmony import */ var _calculation_addcalculation_addcalculation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calculation/addcalculation/addcalculation.component */ "./src/app/calculation/addcalculation/addcalculation.component.ts");
/* harmony import */ var _employees_addEmployees_addEmployees_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employees/addEmployees/addEmployees.component */ "./src/app/employees/addEmployees/addEmployees.component.ts");
/* harmony import */ var _employees_employeesAdvance_employeesAdvance_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employees/employeesAdvance/employeesAdvance.component */ "./src/app/employees/employeesAdvance/employeesAdvance.component.ts");
/* harmony import */ var _employees_search_employee_advance_search_employee_advance_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./employees/search-employee-advance/search-employee-advance.component */ "./src/app/employees/search-employee-advance/search-employee-advance.component.ts");
/* harmony import */ var _calculation_calcalulation_report_calcalulation_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./calculation/calcalulation-report/calcalulation-report.component */ "./src/app/calculation/calcalulation-report/calcalulation-report.component.ts");
/* harmony import */ var _pav_add_pav_entry_add_pav_entry_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pav/add-pav-entry/add-pav-entry.component */ "./src/app/pav/add-pav-entry/add-pav-entry.component.ts");
/* harmony import */ var _pav_pav_report_pav_report_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pav/pav-report/pav-report.component */ "./src/app/pav/pav-report/pav-report.component.ts");
/* harmony import */ var _bills_customer_bills_customer_bills_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bills/customer-bills/customer-bills.component */ "./src/app/bills/customer-bills/customer-bills.component.ts");
/* harmony import */ var _vendor_add_vendor_add_vendor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./vendor/add-vendor/add-vendor.component */ "./src/app/vendor/add-vendor/add-vendor.component.ts");
/* harmony import */ var _vendor_search_vendor_bill_search_vendor_bill_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./vendor/search-vendor-bill/search-vendor-bill.component */ "./src/app/vendor/search-vendor-bill/search-vendor-bill.component.ts");
/* harmony import */ var _bills_bill_menu_bill_menu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bills/bill-menu/bill-menu.component */ "./src/app/bills/bill-menu/bill-menu.component.ts");
/* harmony import */ var _bills_add_billing_menu_add_billing_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bills/add-billing-menu/add-billing-menu.component */ "./src/app/bills/add-billing-menu/add-billing-menu.component.ts");
/* harmony import */ var _farsan_farsanCustomers_farsan_customers_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./farsan/farsanCustomers/farsan-customers.component */ "./src/app/farsan/farsanCustomers/farsan-customers.component.ts");
/* harmony import */ var _farsan_addFarsanCustomers_add_farsan_customers_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./farsan/addFarsanCustomers/add-farsan-customers.component */ "./src/app/farsan/addFarsanCustomers/add-farsan-customers.component.ts");
/* harmony import */ var _farsan_add_farsan_entry_add_farsan_entry_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./farsan/add-farsan-entry/add-farsan-entry.component */ "./src/app/farsan/add-farsan-entry/add-farsan-entry.component.ts");
/* harmony import */ var _farsan_search_cust_bills_search_cust_bills_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./farsan/search-cust-bills/search-cust-bills.component */ "./src/app/farsan/search-cust-bills/search-cust-bills.component.ts");
/* harmony import */ var _orders_home_order_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./orders/home/order.component */ "./src/app/orders/home/order.component.ts");
/* harmony import */ var _orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./orders/order-details/order-details.component */ "./src/app/orders/order-details/order-details.component.ts");
/* harmony import */ var _orders_kitchen_orders_kitchen_orders_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./orders/kitchen-orders/kitchen-orders.component */ "./src/app/orders/kitchen-orders/kitchen-orders.component.ts");
/* harmony import */ var _orders_order_billing_order_billing_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./orders/order-billing/order-billing.component */ "./src/app/orders/order-billing/order-billing.component.ts");
/* harmony import */ var _orders_order_billing_select_table_order_billing_select_table_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./orders/order-billing-select-table/order-billing-select-table.component */ "./src/app/orders/order-billing-select-table/order-billing-select-table.component.ts");
/* harmony import */ var _take_away_home_take_away_home_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./take-away-home/take-away-home.component */ "./src/app/take-away-home/take-away-home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//start date 23-5-18, 25, 26,27



































var appRoutes = [
    { path: 'home', component: _take_away_home_take_away_home_component__WEBPACK_IMPORTED_MODULE_34__["TakeAwayHomeComponent"] },
    { path: 'report1', component: _report1_report1_component__WEBPACK_IMPORTED_MODULE_9__["Report1Component"] },
    { path: 'employees', component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_7__["EmployeesComponent"] },
    { path: 'vendors', component: _vendor_vendor_component__WEBPACK_IMPORTED_MODULE_10__["VendorComponent"] },
    { path: 'addVendor', component: _vendor_add_vendor_add_vendor_component__WEBPACK_IMPORTED_MODULE_21__["AddVendorComponent"] },
    { path: 'vendorAddPaidBill', component: _vendor_vendor_add_paid_bill_vendor_add_paid_bill_component__WEBPACK_IMPORTED_MODULE_12__["VendorAddPaidBillComponent"] },
    { path: 'searchVendorBill', component: _vendor_search_vendor_bill_search_vendor_bill_component__WEBPACK_IMPORTED_MODULE_22__["SearchVendorBillComponent"] },
    { path: 'addCalculation', component: _calculation_addcalculation_addcalculation_component__WEBPACK_IMPORTED_MODULE_13__["AddcalculationComponent"] },
    { path: 'calculationReport', component: _calculation_calcalulation_report_calcalulation_report_component__WEBPACK_IMPORTED_MODULE_17__["CalcalulationReportComponent"] },
    { path: 'addEmployees', component: _employees_addEmployees_addEmployees_component__WEBPACK_IMPORTED_MODULE_14__["AddEmployeesComponent"] },
    { path: 'employeesAdvance', component: _employees_employeesAdvance_employeesAdvance_component__WEBPACK_IMPORTED_MODULE_15__["EmployeesAdvanceComponent"] },
    { path: 'searchEmployeesAdvance', component: _employees_search_employee_advance_search_employee_advance_component__WEBPACK_IMPORTED_MODULE_16__["SearchEmployeeAdvanceComponent"] },
    { path: 'addPavEntry', component: _pav_add_pav_entry_add_pav_entry_component__WEBPACK_IMPORTED_MODULE_18__["AddPavEntryComponent"] },
    { path: 'pavReport', component: _pav_pav_report_pav_report_component__WEBPACK_IMPORTED_MODULE_19__["PavReportComponent"] },
    { path: 'customerBills', component: _bills_customer_bills_customer_bills_component__WEBPACK_IMPORTED_MODULE_20__["CustomerBillsComponent"] },
    { path: 'billsMenu', component: _bills_bill_menu_bill_menu_component__WEBPACK_IMPORTED_MODULE_23__["BillMenuComponent"] },
    { path: 'addBillingMenu', component: _bills_add_billing_menu_add_billing_menu_component__WEBPACK_IMPORTED_MODULE_24__["AddBillingMenuComponent"] },
    { path: 'farsan', component: _farsan_farsanCustomers_farsan_customers_component__WEBPACK_IMPORTED_MODULE_25__["FarsanCustomersComponent"] },
    { path: 'addFarsanCustomers', component: _farsan_addFarsanCustomers_add_farsan_customers_component__WEBPACK_IMPORTED_MODULE_26__["AddFarsanCustomersComponent"] },
    { path: 'addFarsanEntry', component: _farsan_add_farsan_entry_add_farsan_entry_component__WEBPACK_IMPORTED_MODULE_27__["AddFarsanEntryComponent"] },
    { path: 'searchCustBills', component: _farsan_search_cust_bills_search_cust_bills_component__WEBPACK_IMPORTED_MODULE_28__["SearchCustBillsComponent"] },
    { path: 'selectTable', component: _orders_home_order_component__WEBPACK_IMPORTED_MODULE_29__["OrderComponent"] },
    { path: 'orderDetails', component: _orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_30__["OrderDetailsComponent"] },
    { path: 'kitchenOrders', component: _orders_kitchen_orders_kitchen_orders_component__WEBPACK_IMPORTED_MODULE_31__["KitchenOrdersComponent"] },
    { path: 'selectBillingTable', component: _orders_order_billing_select_table_order_billing_select_table_component__WEBPACK_IMPORTED_MODULE_33__["OrderBillingSelectTableComponent"] },
    { path: 'tableBilling', component: _orders_order_billing_order_billing_component__WEBPACK_IMPORTED_MODULE_32__["OrderBillingComponent"] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: _page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponentComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponentComponent"],
                _employees_employees_component__WEBPACK_IMPORTED_MODULE_7__["EmployeesComponent"],
                _report1_report1_component__WEBPACK_IMPORTED_MODULE_9__["Report1Component"],
                _vendor_vendor_component__WEBPACK_IMPORTED_MODULE_10__["VendorComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_11__["SearchPipe"],
                _vendor_vendor_add_paid_bill_vendor_add_paid_bill_component__WEBPACK_IMPORTED_MODULE_12__["VendorAddPaidBillComponent"],
                _calculation_addcalculation_addcalculation_component__WEBPACK_IMPORTED_MODULE_13__["AddcalculationComponent"],
                _employees_addEmployees_addEmployees_component__WEBPACK_IMPORTED_MODULE_14__["AddEmployeesComponent"],
                _employees_employeesAdvance_employeesAdvance_component__WEBPACK_IMPORTED_MODULE_15__["EmployeesAdvanceComponent"],
                _employees_search_employee_advance_search_employee_advance_component__WEBPACK_IMPORTED_MODULE_16__["SearchEmployeeAdvanceComponent"],
                _calculation_calcalulation_report_calcalulation_report_component__WEBPACK_IMPORTED_MODULE_17__["CalcalulationReportComponent"],
                _pav_add_pav_entry_add_pav_entry_component__WEBPACK_IMPORTED_MODULE_18__["AddPavEntryComponent"],
                _pav_pav_report_pav_report_component__WEBPACK_IMPORTED_MODULE_19__["PavReportComponent"],
                _bills_customer_bills_customer_bills_component__WEBPACK_IMPORTED_MODULE_20__["CustomerBillsComponent"],
                _vendor_add_vendor_add_vendor_component__WEBPACK_IMPORTED_MODULE_21__["AddVendorComponent"],
                _vendor_search_vendor_bill_search_vendor_bill_component__WEBPACK_IMPORTED_MODULE_22__["SearchVendorBillComponent"],
                _bills_bill_menu_bill_menu_component__WEBPACK_IMPORTED_MODULE_23__["BillMenuComponent"],
                _bills_add_billing_menu_add_billing_menu_component__WEBPACK_IMPORTED_MODULE_24__["AddBillingMenuComponent"],
                _farsan_farsanCustomers_farsan_customers_component__WEBPACK_IMPORTED_MODULE_25__["FarsanCustomersComponent"],
                _farsan_addFarsanCustomers_add_farsan_customers_component__WEBPACK_IMPORTED_MODULE_26__["AddFarsanCustomersComponent"],
                _farsan_add_farsan_entry_add_farsan_entry_component__WEBPACK_IMPORTED_MODULE_27__["AddFarsanEntryComponent"],
                _farsan_search_cust_bills_search_cust_bills_component__WEBPACK_IMPORTED_MODULE_28__["SearchCustBillsComponent"],
                _orders_home_order_component__WEBPACK_IMPORTED_MODULE_29__["OrderComponent"],
                _orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_30__["OrderDetailsComponent"],
                _orders_kitchen_orders_kitchen_orders_component__WEBPACK_IMPORTED_MODULE_31__["KitchenOrdersComponent"],
                _orders_order_billing_order_billing_component__WEBPACK_IMPORTED_MODULE_32__["OrderBillingComponent"],
                _orders_order_billing_select_table_order_billing_select_table_component__WEBPACK_IMPORTED_MODULE_33__["OrderBillingSelectTableComponent"],
                _take_away_home_take_away_home_component__WEBPACK_IMPORTED_MODULE_34__["TakeAwayHomeComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, {} // <-- debugging purposes only
                ),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bills/add-billing-menu/add-billing-menu.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/bills/add-billing-menu/add-billing-menu.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bills/add-billing-menu/add-billing-menu.component.html":
/*!************************************************************************!*\
  !*** ./src/app/bills/add-billing-menu/add-billing-menu.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3 *ngIf=\"!editObj\">Add Billing Menu</h3>\n  <h3 *ngIf=\"editObj\">Edit Billing Menu</h3>\n</div>\n<div class=\"containerDiv\">\n  <div >\n    <form [formGroup]=\"addBillingMenuForm\" (ngSubmit)=\"addBillingMenu()\" >\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2\">Menu Name:</label>\n          <div class=\"col-sm-3\">\n            <input type=\"text\" formControlName=\"mName\" class=\"form-control-plaintext border\"/>\n            <div *ngFor=\"let validation of addBillingMenuDetails.mName\">\n              <div class=\"invalid-feedback\" *ngIf=\"addBillingMenuForm.get('mName').hasError(validation.type) && addBillingMenuForm.get('mName').touched\">\n              {{validation.message}}</div>\n            </div>        \n          </div>\n        </div>\n\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2\">Price:</label>\n          <div class=\"col-sm-3\">\n            <input type=\"number\" formControlName=\"price\" class=\"form-control-plaintext border\" max=\"10\" min=\"10\"/>\n            <div *ngFor=\"let validation of addBillingMenuDetails.price\">\n              <div class=\"invalid-feedback\" *ngIf=\"addBillingMenuForm.get('price').hasError(validation.type) && addBillingMenuForm.get('price').touched\">\n              {{validation.message}}</div>\n            </div>        \n          </div>\n        </div>\n\n\n        <div class=\"form-group row ml-1\">\n          <button type=\"submit\" class=\"btn btn-primary border\"  [disabled]=\"!addBillingMenuForm.valid\"  *ngIf=\"!editMode\">Add</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"updateVendorData()\"  *ngIf=\"editMode\" [disabled]=\"!addBillingMenuForm.valid\">Update</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"cancelAdd()\">Cancel</button> \n        </div>\n      </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/bills/add-billing-menu/add-billing-menu.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/bills/add-billing-menu/add-billing-menu.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddBillingMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBillingMenuComponent", function() { return AddBillingMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddBillingMenuComponent = /** @class */ (function () {
    function AddBillingMenuComponent(http, route, router, MainSer) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.MainSer = MainSer;
        this.addBillingMenuForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            mName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]))
        });
        this.addBillingMenuDetails = {
            'mName': [{ type: 'required', message: 'Name is required' }],
            'price': [{ type: 'required', message: 'Address is required' }]
        };
        this.editMode = false;
    }
    AddBillingMenuComponent.prototype.addBillingMenu = function () {
        if (!this.editMode) {
            var json = JSON.stringify({ itemname: this.addBillingMenuForm.value.mName, price: this.addBillingMenuForm.value.price });
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            header.append("Content-Type", "application/json");
            this.http.post("http://localhost:3000/api/addBillingMenu", json, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) {
                alert("Billing Menu Added Successfully!");
            });
            this.addBillingMenuForm.reset();
        }
    };
    AddBillingMenuComponent.prototype.cancelAdd = function () {
        this.router.navigate(['billsMenu'], {});
    };
    AddBillingMenuComponent.prototype.ngOnInit = function () {
        if (this.MainSer.getEditMode()) {
            this.editMode = true;
            this.editObj = this.MainSer.getEditObj();
            this.addBillingMenuForm.controls['mName'].setValue(this.editObj.itemname);
            this.addBillingMenuForm.controls['price'].setValue(this.editObj.price);
        }
    };
    AddBillingMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-billing-menu',
            template: __webpack_require__(/*! ./add-billing-menu.component.html */ "./src/app/bills/add-billing-menu/add-billing-menu.component.html"),
            styles: [__webpack_require__(/*! ./add-billing-menu.component.css */ "./src/app/bills/add-billing-menu/add-billing-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]])
    ], AddBillingMenuComponent);
    return AddBillingMenuComponent;
}());



/***/ }),

/***/ "./src/app/bills/bill-menu/bill-menu.component.css":
/*!*********************************************************!*\
  !*** ./src/app/bills/bill-menu/bill-menu.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/bills/bill-menu/bill-menu.component.html":
/*!**********************************************************!*\
  !*** ./src/app/bills/bill-menu/bill-menu.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3>Billing Menu</h3>\n</div>\n<div class=\"containerDiv row\">\n  <div class=\"col-xs-6\">\n    <div>\n      <span *ngIf=\"billMenu.length\">Search Menu: <input  [(ngModel)]=\"searchString\"></span> \n      &nbsp;<button class=\"btn btn-success \" (click)=\"addBillingMenu()\" >Add New</button>\n      \n    </div>\n    <br>\n    <table  class=\"table border\" *ngIf=\"billMenu.length\">\n      <tr>\n          <th>No</th>\n          <th>Item Name</th>\n          <th>Price</th>\n          <th>Action</th>\n      </tr>\n      <tr *ngFor=\"let e of billMenu | filter : 'itemname' : searchString;let i = index;\">\n        <td>{{i+1}}</td>\n        <td>{{e.itemname}}</td>\n        <td>{{e.price}}</td>\n        <td><button (click)=\"editBillingMenu(e)\" class=\"btn btn-primary\">Edit</button></td>\n      </tr>\n      \n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bills/bill-menu/bill-menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/bills/bill-menu/bill-menu.component.ts ***!
  \********************************************************/
/*! exports provided: BillMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillMenuComponent", function() { return BillMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BillMenuComponent = /** @class */ (function () {
    function BillMenuComponent(http, router, MainSer) {
        this.http = http;
        this.router = router;
        this.MainSer = MainSer;
        this.billMenu = [];
    }
    BillMenuComponent.prototype.getBillingMenu = function () {
        var _this = this;
        if (localStorage.getItem('menu') == null) {
            this.http.get("http://localhost:3000/api/GetItemsData")
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) { return _this.billMenu = resp; });
        }
        else {
            this.billMenu = JSON.parse(localStorage.getItem('menu'));
        }
    };
    BillMenuComponent.prototype.addBillingMenu = function () {
        this.MainSer.setCreateMode(true);
        this.router.navigate(['addBillingMenu'], {});
    };
    BillMenuComponent.prototype.editBillingMenu = function (editObj) {
        this.MainSer.setEditMode(true);
        this.MainSer.setEditObj(editObj);
        this.router.navigate(['addBillingMenu'], {});
    };
    BillMenuComponent.prototype.ngOnInit = function () {
        this.getBillingMenu();
    };
    BillMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill-menu',
            template: __webpack_require__(/*! ./bill-menu.component.html */ "./src/app/bills/bill-menu/bill-menu.component.html"),
            styles: [__webpack_require__(/*! ./bill-menu.component.css */ "./src/app/bills/bill-menu/bill-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], BillMenuComponent);
    return BillMenuComponent;
}());



/***/ }),

/***/ "./src/app/bills/customer-bills/customer-bills.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/bills/customer-bills/customer-bills.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/bills/customer-bills/customer-bills.component.html":
/*!********************************************************************!*\
  !*** ./src/app/bills/customer-bills/customer-bills.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3>Search Customer Bill:</h3>\n</div>\n<div class=\"containerDiv row\">\n  <div class=\"col-xs-6\">\n  <b>Enter Search Fields:</b>\n   &nbsp;<input type=\"date\" [(ngModel)]=\"billDate\" [max]=\"todaySysDate\"/>&nbsp;\n   <input type=\"text\" [(ngModel)]=\"cname\" placeholder=\"Customer Name\"/>&nbsp;\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!billDate\" (click)=\"getCustomerBill()\">Search</button>\n  <br> \n  <hr>\n\n  <table  class=\"table border\" *ngIf=\"cBillData.length\">\n    <tr>\n        <th>Sr. No</th>\n        <th>Date</th>\n        <th>Bill No</th>\n        <th>Customer Name</th>\n        <th>Item Name</th>\n        <th>Item Qty</th>\n        <th>Note</th>\n        <th>Amount</th>\n    </tr>\n    <tr *ngFor=\"let e of cBillData ; let i = index;\">\n      <td>{{i+1}}</td>\n      <td>{{e.date}}  {{e.time}}</td>\n      <td>{{e.billno}}</td>\n      <td>{{e.cname}}</td>\n      <td>{{items[e.itemno-1].itemname}}</td>\n      <td>{{e.qty}}</td>\n      <td [innerHTML]=\"e.note\"></td>\n      <td>{{e.qty * items[e.itemno-1].price}}</td>\n    </tr>\n    \n  </table>\n\n  </div>\n  \n\n</div>"

/***/ }),

/***/ "./src/app/bills/customer-bills/customer-bills.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/bills/customer-bills/customer-bills.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomerBillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerBillsComponent", function() { return CustomerBillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerBillsComponent = /** @class */ (function () {
    function CustomerBillsComponent(http, datepipe) {
        this.http = http;
        this.datepipe = datepipe;
        this.cBillData = [];
        this.cname = "";
    }
    CustomerBillsComponent.prototype.ngOnInit = function () {
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
        this.billDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
        this.getItemsData();
    };
    CustomerBillsComponent.prototype.getCustomerBill = function () {
        var _this = this;
        var tmpDate = this.datepipe.transform(this.billDate, 'MM-dd-yyyy');
        this.http.get("http://localhost:3000/api/getCustBill?billDate=" + tmpDate + "&cname=" + this.cname)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.cBillData = resp;
            console.log("Bill Data " + _this.cBillData);
            if (_this.cBillData.length == 0) {
                alert("No Record Found!");
            }
        });
    };
    CustomerBillsComponent.prototype.getItemsData = function () {
        var _this = this;
        if (localStorage.getItem('menu') == null) {
            this.http.get("http://localhost:3000/api/GetItemsData")
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) { return _this.items = resp; });
        }
        else {
            this.items = JSON.parse(localStorage.getItem('menu'));
        }
    };
    CustomerBillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-bills',
            template: __webpack_require__(/*! ./customer-bills.component.html */ "./src/app/bills/customer-bills/customer-bills.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [__webpack_require__(/*! ./customer-bills.component.css */ "./src/app/bills/customer-bills/customer-bills.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], CustomerBillsComponent);
    return CustomerBillsComponent;
}());



/***/ }),

/***/ "./src/app/calculation/addcalculation/addCalculation.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/calculation/addcalculation/addCalculation.model.ts ***!
  \********************************************************************/
/*! exports provided: addCalculation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCalculation", function() { return addCalculation; });
var addCalculation = /** @class */ (function () {
    function addCalculation() {
        this.NotesNo_2000 = 0;
        this.NotesNo_500 = 0;
        this.NotesNo_200 = 0;
        this.NotesNo_100 = 0;
        this.NotesNo_50 = 0;
        this.NotesNo_20 = 0;
        this.NotesNo_10 = 0;
        this.PayTMAmount = 0;
        this.ZomatoAmount = 0;
        this.SwiggyAmount = 0;
        this.JDAmount = 0;
        this.change = 0;
        this.BhimAmount = 0;
        this.laptop = 0;
        this.expences = 0;
    }
    return addCalculation;
}());



/***/ }),

/***/ "./src/app/calculation/addcalculation/addcalculation.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/calculation/addcalculation/addcalculation.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css'); */"

/***/ }),

/***/ "./src/app/calculation/addcalculation/addcalculation.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/calculation/addcalculation/addcalculation.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3>Sale Calculations</h3>\n</div>\n<div class=\"containerDiv\">\n    <b>Select Date:</b> &nbsp;<input type=\"date\" [(ngModel)]=\"saleCalDate\" [max]=\"todaySysDate\"/>&nbsp;\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!saleCalDate\" (click)=\"getLastSavedValues('manual',saleCalDate)\">Submit</button>\n    <!-- &nbsp;<button class=\"btn btn-success\" (click)=\"this.router.navigate(['calculationReport'], {});\">Report</button> --><br><br> \n    \n    <table  class=\"table table-bordered\" style=\"width: 650px\">\n      <!--  <tr>\n            <th colspan=\"3\">Report For Date: {{reportDate}}</th>\n        </tr>-->\n      <tr>\n        <th>Currency</th>\n        <th>No Of Notes</th>\n        <th>Amount</th>\n      </tr>\n      <tr>\n        <td>2000</td>\n        <td><input type=\"number\" [(ngModel)]=\"addCalculationObj.NotesNo_2000\" min=\"0\"/></td>\n        <td>{{addCalculationObj.NotesNo_2000*2000}}</td>\n      </tr>\n    \n      <tr>\n        <td>500</td>\n        <td><input type=\"number\" [(ngModel)]=\"addCalculationObj.NotesNo_500\" min=\"0\"/></td>\n        <td>{{addCalculationObj.NotesNo_500*500}}</td>\n      </tr>\n    \n      <tr>\n        <td>200</td>\n        <td><input type=\"number\" [(ngModel)]=\"addCalculationObj.NotesNo_200\" min=\"0\"/></td>\n        <td>{{addCalculationObj.NotesNo_200*200}}</td>\n      </tr>\n    \n      <tr>\n        <td>100</td>\n        <td><input type=\"number\" [(ngModel)]=\"addCalculationObj.NotesNo_100\" min=\"0\"/></td>\n        <td>{{addCalculationObj.NotesNo_100*100}}</td>\n      </tr>\n    \n      <tr>\n        <td>50</td>\n        <td><input type=\"number\" [(ngModel)]=\"addCalculationObj.NotesNo_50\" min=\"0\"/></td>\n        <td>{{addCalculationObj.NotesNo_50*50}}</td>\n      </tr>\n    \n      <tr>\n        <td>20</td>\n        <td><input type=\"number\" [(ngModel)]=\"addCalculationObj.NotesNo_20\" min=\"0\"/></td>\n        <td>{{addCalculationObj.NotesNo_20*20}}</td>\n      </tr>\n    \n      <tr>\n        <td>10</td>\n        <td><input type=\"number\" [(ngModel)]=\"addCalculationObj.NotesNo_10\" min=\"0\"/></td>\n        <td>{{addCalculationObj.NotesNo_10*10}}</td>\n      </tr>\n      <tr>\n        <th colspan=\"2\">Total Cash</th>\n        <th>{{getTotal()}}</th>\n      </tr>\n      <tr>\n        <th colspan=\"2\">\n          PayTM: &nbsp;<input type=\"number\" [(ngModel)]=\"addCalculationObj.PayTMAmount\" min=\"0\"/>\n        </th>\n        <th>\n          BHIM: &nbsp;&nbsp;&nbsp;<input type=\"number\" [(ngModel)]=\"addCalculationObj.BhimAmount\" min=\"0\"/>\n        </th>\n      </tr>\n      <tr>\n        <th colspan=\"2\">\n          Change:&nbsp;<input type=\"number\" [(ngModel)]=\"addCalculationObj.change\" min=\"0\"/>\n        </th>\n        <th>Expences:&nbsp;<input type=\"number\" [(ngModel)]=\"addCalculationObj.expences\" min=\"0\"/></th>\n      </tr>\n      <tr>\n        <th colspan=\"2\">Laptop: {{getLaptopTotal()}}</th>\n        <th>Shop: &nbsp;&nbsp;&nbsp;&nbsp; {{getShopTotal()}}</th>\n      </tr>\n      \n      <tr>\n        <th colspan=\"2\">Zomato: <input type=\"number\" [(ngModel)]=\"addCalculationObj.ZomatoAmount\" min=\"0\"/></th>\n        <th>Swiggy: &nbsp;&nbsp;&nbsp;<input type=\"number\" [(ngModel)]=\"addCalculationObj.SwiggyAmount\" min=\"0\"/></th>\n      </tr>\n           \n      <tr>\n        <th colspan=\"2\">Net Total: {{netTotal()}}</th>\n        <th> <button (click)=\"saveCalculationReport()\">Save</button></th>\n      </tr>\n     <!-- <tr>\n        <th colspan=\"2\">Save Report</th>\n        <th><button type=\"submit\" class=\"btn btn-primary\">Save</button></th>\n      </tr>-->\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/calculation/addcalculation/addcalculation.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/calculation/addcalculation/addcalculation.component.ts ***!
  \************************************************************************/
/*! exports provided: AddcalculationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcalculationComponent", function() { return AddcalculationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _addCalculation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addCalculation.model */ "./src/app/calculation/addcalculation/addCalculation.model.ts");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddcalculationComponent = /** @class */ (function () {
    function AddcalculationComponent(http, datepipe, MainSer, router) {
        this.http = http;
        this.datepipe = datepipe;
        this.MainSer = MainSer;
        this.router = router;
        this.addCalculationObj = new _addCalculation_model__WEBPACK_IMPORTED_MODULE_1__["addCalculation"]();
        this.report = [];
        this.report1Amount = 0;
        this.items = [];
        this.branchName = MainSer.getbranchName();
        this.getItemsData();
        this.getChangeAmount();
        var tmpTodaysDate;
        tmpTodaysDate = new Date();
        this.getLastSavedValues("auto", tmpTodaysDate);
    }
    AddcalculationComponent.prototype.getTotal = function () {
        var tmpTotal = (this.addCalculationObj.NotesNo_2000 * 2000) + (this.addCalculationObj.NotesNo_500 * 500) + (this.addCalculationObj.NotesNo_200 * 200) + (this.addCalculationObj.NotesNo_100 * 100) + (this.addCalculationObj.NotesNo_50 * 50) + (this.addCalculationObj.NotesNo_20 * 20) + (this.addCalculationObj.NotesNo_10 * 10);
        return tmpTotal;
    };
    AddcalculationComponent.prototype.netTotal = function () {
        this.setAddCalculationObject();
        return this.getTotal() + this.addCalculationObj.PayTMAmount + this.addCalculationObj.ZomatoAmount + this.addCalculationObj.SwiggyAmount + this.addCalculationObj.BhimAmount + this.addCalculationObj.expences - this.addCalculationObj.change;
    };
    AddcalculationComponent.prototype.setAddCalculationObject = function () {
        this.MainSer.setAddCalculationObject(this.addCalculationObj);
    };
    AddcalculationComponent.prototype.getShopTotal = function () {
        return this.getTotal() + this.addCalculationObj.PayTMAmount + this.addCalculationObj.BhimAmount + this.addCalculationObj.expences - this.addCalculationObj.change;
    };
    AddcalculationComponent.prototype.getReport = function () {
        var _this = this;
        var tmpTodaysDate;
        tmpTodaysDate = new Date();
        this.todayDate = this.datepipe.transform(tmpTodaysDate, 'MM-dd-yyyy');
        var tmp, i;
        this.report = [];
        for (i = 1; i <= this.items.length; i++) {
            this.http.get("http://localhost:3000/api/todaysReport?itemno=" + i + "&todaysDate=" + this.todayDate)
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) {
                tmp = resp;
                if (tmp[0].qty == null)
                    tmp[0].qty = 0;
                else
                    _this.report.push(tmp[0]);
            });
        }
    };
    AddcalculationComponent.prototype.getItemsData = function () {
        var _this = this;
        if (localStorage.getItem('menu') == null) {
            this.http.get("http://localhost:3000/api/GetItemsData")
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) { _this.items = resp; _this.getReport(); });
        }
        else {
            this.items = JSON.parse(localStorage.getItem('menu'));
            this.getReport();
        }
    };
    AddcalculationComponent.prototype.getLaptopTotal = function () {
        if (this.calType == "manual") {
            return this.addCalculationObj.laptop;
        }
        else {
            this.report1Amount = 0;
            for (var i = 0; i < this.report.length; i++) {
                this.report1Amount += (parseInt(this.report[i].price) * parseInt(this.report[i].qty));
            }
            return this.report1Amount;
        }
    };
    AddcalculationComponent.prototype.saveCalculationReport = function () {
        var _this = this;
        var tmpTodaysDate;
        if (this.calType == "manual") {
        }
        else {
            tmpTodaysDate = new Date();
            this.todayDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
        }
        this.http.get("http://localhost:3000/api/saleCalDate?cDate=" + this.todayDate)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            if (resp.length == 0)
                _this.addNewSaleCalculation();
            else
                _this.updateSaleCalculation();
        });
    };
    AddcalculationComponent.prototype.addNewSaleCalculation = function () {
        var tmpTodaysDate;
        if (this.calType != "manual") {
            tmpTodaysDate = new Date();
            this.todayDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd-');
        }
        var json = JSON.stringify({ sDate: this.todayDate,
            c2000: this.addCalculationObj.NotesNo_2000, c500: this.addCalculationObj.NotesNo_500,
            c200: this.addCalculationObj.NotesNo_200, c100: this.addCalculationObj.NotesNo_100,
            c50: this.addCalculationObj.NotesNo_50, c20: this.addCalculationObj.NotesNo_20,
            c10: this.addCalculationObj.NotesNo_10, cash: this.getTotal(),
            paytm: this.addCalculationObj.PayTMAmount, bhim: this.addCalculationObj.BhimAmount,
            sChange: this.addCalculationObj.change, shopSale: this.getShopTotal(),
            laptopSale: this.getLaptopTotal(), zomato: this.addCalculationObj.ZomatoAmount,
            swiggy: this.addCalculationObj.SwiggyAmount, expences: this.addCalculationObj.expences });
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        header.append("Content-Type", "application/json");
        this.http.post("http://localhost:3000/api/addSaleCalculation", json, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            alert("Sale Calculation Save Successfully");
        });
    };
    AddcalculationComponent.prototype.updateSaleCalculation = function () {
        var json = JSON.stringify({ sDate: this.todayDate,
            c2000: this.addCalculationObj.NotesNo_2000, c500: this.addCalculationObj.NotesNo_500,
            c200: this.addCalculationObj.NotesNo_200, c100: this.addCalculationObj.NotesNo_100,
            c50: this.addCalculationObj.NotesNo_50, c20: this.addCalculationObj.NotesNo_20,
            c10: this.addCalculationObj.NotesNo_10, cash: this.getTotal(),
            paytm: this.addCalculationObj.PayTMAmount, bhim: this.addCalculationObj.BhimAmount,
            sChange: this.addCalculationObj.change, shopSale: this.getShopTotal(),
            laptopSale: this.getLaptopTotal(), zomato: this.addCalculationObj.ZomatoAmount,
            swiggy: this.addCalculationObj.SwiggyAmount, expences: this.addCalculationObj.expences });
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        header.append("Content-Type", "application/json");
        this.http.post("http://localhost:3000/api/updateSaleCalculation", json, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            alert("Sale Calculation Updated Successfully");
        });
    };
    AddcalculationComponent.prototype.getChangeAmount = function () {
        var _this = this;
        var tmpTodaysDate;
        tmpTodaysDate = new Date();
        tmpTodaysDate.setDate(tmpTodaysDate.getDate() - 1);
        this.todayDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
        console.log("todayDate" + this.todayDate);
        this.http.get("http://localhost:3000/api/saleCalDate?cDate=" + this.todayDate)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            if (resp.length == 0)
                _this.addCalculationObj.change = 0;
            else
                _this.addCalculationObj.change = (parseInt(resp[0].c50) * 50) + (parseInt(resp[0].c20) * 20) + (parseInt(resp[0].c10) * 10);
        });
    };
    AddcalculationComponent.prototype.getLastSavedValues = function (type, tmpTodaysDate) {
        var _this = this;
        if (tmpTodaysDate) {
            this.calType = type;
            ;
            this.todayDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
            console.log("todayDate" + this.todayDate);
            this.http.get("http://localhost:3000/api/saleCalDate?cDate=" + this.todayDate)
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) {
                if (resp.length != 0) {
                    _this.addCalculationObj.NotesNo_2000 = resp[0].c2000;
                    _this.addCalculationObj.NotesNo_500 = resp[0].c500;
                    _this.addCalculationObj.NotesNo_200 = resp[0].c200;
                    _this.addCalculationObj.NotesNo_100 = resp[0].c100;
                    _this.addCalculationObj.NotesNo_50 = resp[0].c50;
                    _this.addCalculationObj.NotesNo_20 = resp[0].c20;
                    _this.addCalculationObj.NotesNo_10 = resp[0].c10;
                    _this.addCalculationObj.PayTMAmount = resp[0].paytm;
                    _this.addCalculationObj.BhimAmount = resp[0].bhim;
                    _this.addCalculationObj.expences = resp[0].expences;
                    _this.addCalculationObj.ZomatoAmount = resp[0].zomato;
                    _this.addCalculationObj.SwiggyAmount = resp[0].swiggy;
                    _this.addCalculationObj.change = resp[0].sChange;
                    if (type == "manual") {
                        _this.addCalculationObj.laptop = resp[0].laptopSale;
                    }
                }
                else {
                    if (type == "manual")
                        alert("No Record Found!");
                }
            });
        }
    };
    AddcalculationComponent.prototype.ngOnInit = function () {
        // this.addCalculationObj = this.MainSer.getAddCalculationObject();
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
    };
    AddcalculationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addcalculation',
            template: __webpack_require__(/*! ./addcalculation.component.html */ "./src/app/calculation/addcalculation/addcalculation.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            styles: [__webpack_require__(/*! ./addcalculation.component.css */ "./src/app/calculation/addcalculation/addcalculation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddcalculationComponent);
    return AddcalculationComponent;
}());



/***/ }),

/***/ "./src/app/calculation/calcalulation-report/calcalulation-report.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/calculation/calcalulation-report/calcalulation-report.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/calculation/calcalulation-report/calcalulation-report.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/calculation/calcalulation-report/calcalulation-report.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3>Calculation Report</h3>\n</div>\n<div class=\"containerDiv row\">\n  <div class=\"col-xs-6\">\n    <div>\n<!--       <span *ngIf=\"calcReport.length\">Search: <input  [(ngModel)]=\"searchString\"></span> \n -->     \n  <b>Select Date: &nbsp; </b>\n  <b>From </b> <input type=\"date\" [(ngModel)]=\"inputStartDate\" [max]=\"todaySysDate\"/>&nbsp;\n  <b>To </b> <input type=\"date\" [(ngModel)]=\"inputEndDate\" [max]=\"todaySysDate\"/>&nbsp;\n  <button class=\"btn btn-primary\" (click)=\"getCalculationData('manual')\" [disabled]=\"!inputStartDate || !inputEndDate\">Submit</button>\n    </div>\n    <br>\n    <h5><b>Report From:</b> {{startDate}} <b>To:</b> {{endDate}}</h5>\n    <table  class=\"table border\" *ngIf=\"calcReport.length\">\n      <tr>\n          <th>No</th>\n          <th>Date</th>\n          <th>Laptop Sale</th>\n          <th>Shop Sale</th>\n          <th>Swiggy</th>\n          <th>Zomato</th>\n          <th>Total</th>\n      </tr>\n      <tr *ngFor=\"let e of calcReport;let i = index;\">\n        <td>{{i+1}}</td>\n        <td>{{e.sDate | date:'dd/MM/yyyy'}}</td>\n        <td>{{e.laptopSale}}</td>\n        <td>{{e.shopSale}}</td>\n        <td>{{e.swiggy}}</td>\n        <td>{{e.zomato}}</td>\n        <td>{{e.shopSale + e.swiggy + e.zomato}}</td>\n      </tr>\n      \n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/calculation/calcalulation-report/calcalulation-report.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/calculation/calcalulation-report/calcalulation-report.component.ts ***!
  \************************************************************************************/
/*! exports provided: CalcalulationReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcalulationReportComponent", function() { return CalcalulationReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalcalulationReportComponent = /** @class */ (function () {
    function CalcalulationReportComponent(http, route, router, MainSer, datepipe) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.MainSer = MainSer;
        this.datepipe = datepipe;
        this.calcReport = [];
    }
    CalcalulationReportComponent.prototype.getCalculationData = function (type) {
        var _this = this;
        if (type == "auto") {
            var tmpTodaysDate = new Date();
            this.endDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
            tmpTodaysDate.setDate(tmpTodaysDate.getDate() - 30);
            this.startDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
        }
        else {
            this.startDate = this.datepipe.transform(this.inputStartDate, 'yyyy-MM-dd');
            this.endDate = this.datepipe.transform(this.inputEndDate, 'yyyy-MM-dd');
        }
        console.log("startDate " + this.startDate + " endDate" + this.endDate);
        this.http.get("http://localhost:3000/api/getCalcReport?startDate=" + this.startDate + "&endDate=" + this.endDate)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.calcReport = resp;
            if (_this.calcReport.length == 0)
                alert("No Record Found!");
        });
    };
    CalcalulationReportComponent.prototype.ngOnInit = function () {
        this.getCalculationData('auto');
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
    };
    CalcalulationReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calcalulation-report',
            template: __webpack_require__(/*! ./calcalulation-report.component.html */ "./src/app/calculation/calcalulation-report/calcalulation-report.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
            styles: [__webpack_require__(/*! ./calcalulation-report.component.css */ "./src/app/calculation/calcalulation-report/calcalulation-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], CalcalulationReportComponent);
    return CalcalulationReportComponent;
}());



/***/ }),

/***/ "./src/app/employees/addEmployees/addEmployees.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/employees/addEmployees/addEmployees.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/employees/addEmployees/addEmployees.component.html":
/*!********************************************************************!*\
  !*** ./src/app/employees/addEmployees/addEmployees.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3 *ngIf=\"!empEditMode\">Add Employee</h3>\n  <h3 *ngIf=\"empEditMode\">Edit Employee</h3>\n</div>\n<div class=\"containerDiv\">\n  <div >\n    <form [formGroup]=\"addEmpForm\" (ngSubmit)=\"addEmployee()\" >\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2\">Name:</label>\n          <div class=\"col-sm-3\">\n            <input type=\"text\" formControlName=\"name\" class=\"form-control-plaintext border\"/>\n            <div *ngFor=\"let validation of EmpFormDetails.name\">\n              <div class=\"invalid-feedback\" *ngIf=\"addEmpForm.get('name').hasError(validation.type) && addEmpForm.get('name').touched\">\n              {{validation.message}}</div>\n            </div>        \n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Address</label>\n          <div class=\"col-sm-3\">\n              <textarea row=\"3\" formControlName=\"add\" class=\"form-control-plaintext border\"></textarea>\n              <div *ngFor=\"let validation of EmpFormDetails.add\"><div class=\"invalid-feedback\" *ngIf=\"addEmpForm.get('add').hasError(validation.type) && addEmpForm.get('add').touched\">{{validation.message}}</div></div>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2\">Mobile No:</label>\n          <div class=\"col-sm-3\">\n            <input type=\"number\" formControlName=\"moNo\" class=\"form-control-plaintext border\" max=\"10\" min=\"10\"/>\n            <div *ngFor=\"let validation of EmpFormDetails.moNo\">\n              <div class=\"invalid-feedback\" *ngIf=\"addEmpForm.get('moNo').hasError(validation.type) && addEmpForm.get('moNo').touched\">\n              {{validation.message}}</div>\n            </div>        \n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Designation</label>\n          <div class=\"col-sm-3\">\n            <select formControlName=\"designation\" class=\"form-control-plaintext border\">\n              <option value=\"\" disabled>Select</option>\n              <option>Helper</option>\n              <option>Waiter</option>\n              <option>Manager</option>\n              <option>Ass. Manager</option>\n              <option>Owner</option>\n            </select>\n            <div *ngFor=\"let validation of EmpFormDetails.designation\">\n              <div class=\"invalid-feedback\" *ngIf=\"addEmpForm.get('designation').hasError(validation.type) && addEmpForm.get('designation').touched\">\n              {{validation.message}}</div>\n            </div>             \n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2\">Doc ID:</label>\n          <div class=\"col-sm-3\">\n            <input type=\"text\" formControlName=\"docID\" class=\"form-control-plaintext border\"/>\n            <div *ngFor=\"let validation of EmpFormDetails.docID\">\n              <div class=\"invalid-feedback\" *ngIf=\"addEmpForm.get('docID').hasError(validation.type) && addEmpForm.get('docID').touched\">\n              {{validation.message}}</div>\n            </div>        \n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">DOJ</label>\n          <div class=\"col-sm-3\">\n            <input type=\"date\" formControlName=\"DOJ\" class=\"form-control-plaintext border\" [max]=\"todaySysDate\"/>\n            <div *ngFor=\"let validation of EmpFormDetails.DOJ\">\n              <div class=\"invalid-feedback\" *ngIf=\"addEmpForm.get('DOJ').hasError(validation.type) && addEmpForm.get('DOJ').touched\">\n              {{validation.message}}</div>\n            </div>        \n          </div>\n        </div>\n\n        <div class=\"form-group row ml-1\">\n          <button type=\"submit\" class=\"btn btn-primary border\"  [disabled]=\"!addEmpForm.valid\"  *ngIf=\"!empEditMode\">Add</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"updateEmpData()\"  *ngIf=\"empEditMode\" [disabled]=\"!addEmpForm.valid\">Update</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"cancelAdd()\">Cancel</button> \n        </div>\n      </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/employees/addEmployees/addEmployees.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/employees/addEmployees/addEmployees.component.ts ***!
  \******************************************************************/
/*! exports provided: AddEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeesComponent", function() { return AddEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddEmployeesComponent = /** @class */ (function () {
    function AddEmployeesComponent(http, route, router, MainSer, datepipe) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.MainSer = MainSer;
        this.datepipe = datepipe;
        this.addEmpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            add: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            moNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            docID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            DOJ: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]))
        });
        this.EmpFormDetails = {
            'name': [{ type: 'required', message: 'Name is required' }],
            'add': [{ type: 'required', message: 'Address is required' }],
            'moNo': [{ type: 'required', message: 'Mobile No is required' }],
            'designation': [{ type: 'required', message: 'Designation is required' }],
            'docID': [{ type: 'required', message: 'Doc ID is required' }],
            'DOJ': [{ type: 'required', message: 'DOJ is required' }]
        };
        this.empEditMode = false;
    }
    AddEmployeesComponent.prototype.addEmployee = function () {
        var _this = this;
        if (!this.empEditMode) {
            console.log("addVendor ");
            var json = JSON.stringify({ eName: this.addEmpForm.value.name, eadd: this.addEmpForm.value.add, mobileNo: this.addEmpForm.value.moNo, designation: this.addEmpForm.value.designation, docID: this.addEmpForm.value.docID, DOJ: this.addEmpForm.value.DOJ });
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            header.append("Content-Type", "application/json");
            this.http.post("http://localhost:3000/api/addEmployee", json, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) {
                alert("Employee Added Successfully!");
                _this.router.navigate(['employees'], {});
            });
            this.addEmpForm.reset();
        }
    };
    AddEmployeesComponent.prototype.cancelAdd = function () {
        this.router.navigate(['employees'], {});
    };
    AddEmployeesComponent.prototype.updateEmpData = function () {
        var _this = this;
        console.log("updateEmpData-- " + this.empEditObj.eno);
        var json = JSON.stringify({ eno: this.empEditObj.eno, eName: this.addEmpForm.value.name, add: this.addEmpForm.value.add, mobileNo: this.addEmpForm.value.moNo, designation: this.addEmpForm.value.designation, docID: this.addEmpForm.value.docID, DOJ: this.addEmpForm.value.DOJ });
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append("Content-Type", "application/json");
        this.http.post("http://localhost:3000/api/updateEmployee", json, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            alert("Record Updated!");
            _this.router.navigate(['employees'], {});
        });
    };
    AddEmployeesComponent.prototype.ngOnInit = function () {
        if (this.MainSer.getEditMode()) {
            this.empEditMode = true;
            this.empEditObj = this.MainSer.getEditObj();
            var latest_date = this.datepipe.transform(this.empEditObj.DOJ, 'yyyy-MM-dd');
            this.addEmpForm.controls['name'].setValue(this.empEditObj.eName);
            this.addEmpForm.controls['add'].setValue(this.empEditObj.eadd);
            this.addEmpForm.controls['moNo'].setValue(this.empEditObj.mobileNo);
            this.addEmpForm.controls['designation'].setValue(this.empEditObj.designation);
            this.addEmpForm.controls['docID'].setValue(this.empEditObj.docID);
            this.addEmpForm.controls['DOJ'].setValue(latest_date);
        }
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
    };
    AddEmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-employees',
            template: __webpack_require__(/*! ./addEmployees.component.html */ "./src/app/employees/addEmployees/addEmployees.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            styles: [__webpack_require__(/*! ./addEmployees.component.css */ "./src/app/employees/addEmployees/addEmployees.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], AddEmployeesComponent);
    return AddEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/employees/employees.component.html":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3>Employees</h3>\n</div>\n<div class=\"containerDiv row\">\n  <div class=\"col-xs-6\">\n    <div>\n      <span *ngIf=\"empData.length\">Search: <input  [(ngModel)]=\"searchString\"></span> \n      &nbsp;<button class=\"btn btn-success \" (click)=\"addnew()\" >Add New</button>\n      &nbsp;<button class=\"btn btn-success\" (click)=\"addEmpAdvance()\">Add Advance</button>\n      &nbsp;<button class=\"btn btn-success\" (click)=\"router.navigate(['searchEmployeesAdvance'], {});\">Search Advance</button>\n    </div>\n    <br>\n    <table  class=\"table border\" *ngIf=\"empData.length\">\n      <tr>\n          <th>No</th>\n          <th style=\"width: 180px\">Name</th>\n          <th style=\"width: 180px\">Add</th>\n          <th>Contact No</th>\n          <th>Designation</th>\n          <th>Doc ID</th>\n          <th>DOJ</th>\n          <th>Action</th>\n      </tr>\n      <tr *ngFor=\"let e of empData | filter : 'eName' : searchString;let i = index;\">\n        <td>{{i+1}}</td>\n        <td>{{e.eName}}</td>\n        <td>{{e.eadd}}</td>\n        <td>{{e.mobileNo}}</td>\n        <td>{{e.designation}}</td>\n        <td>{{e.docID}}</td>\n        <td>{{e.DOJ  | date:'dd/MM/yyyy'}}</td>\n        <td><button (click)=\"editEmployee(e)\" class=\"btn btn-primary\">Edit</button></td>\n      </tr>\n      \n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(http, route, router, MainSer) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.MainSer = MainSer;
        this.empData = [];
    }
    EmployeesComponent.prototype.getEmployeeData = function () {
        var _this = this;
        this.http.get("http://localhost:3000/api/getEmpData")
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.empData = resp;
            console.log("empData " + _this.empData);
        });
    };
    EmployeesComponent.prototype.addnew = function () {
        this.MainSer.setCreateMode(true);
        this.router.navigate(['addEmployees'], {});
    };
    EmployeesComponent.prototype.editEmployee = function (editEmpObj) {
        this.MainSer.setEditMode(true);
        this.MainSer.setEditObj(editEmpObj);
        this.router.navigate(['addEmployees'], {});
    };
    EmployeesComponent.prototype.addEmpAdvance = function () {
        this.MainSer.setEmpAdvAddMode(true);
        this.router.navigate(['employeesAdvance'], {});
    };
    EmployeesComponent.prototype.ngOnInit = function () {
        this.getEmployeeData();
        this.MainSer.setCreateMode(false);
        this.MainSer.setEditMode(false);
        this.MainSer.setEmpAdvEditMode(false);
        this.MainSer.setEmpAdvAddMode(false);
    };
    EmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/employees/employeesAdvance/employeesAdvance.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/employees/employeesAdvance/employeesAdvance.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/employees/employeesAdvance/employeesAdvance.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/employees/employeesAdvance/employeesAdvance.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3></h3>\n  <h3 *ngIf=\"!empAdvEditMode\">Add Employee Advance</h3>\n  <h3 *ngIf=\"empAdvEditMode\">Edit Employee Advance</h3>\n</div>\n<div class=\"containerDiv\">\n  <div >\n    <form [formGroup]=\"empAdvanceForm\" (ngSubmit)=\"addEmployeeAdvance()\" >\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Transaction Date:</label>\n        <div class=\"col-sm-3\">\n          <input type=\"date\" disabled=\"true\" formControlName=\"tranDate\" class=\"form-control-plaintext border\" [max]=\"todaySysDate\"/>\n          <div *ngFor=\"let validation of empAdvanceDetails.tranDate\">\n            <div class=\"invalid-feedback\" *ngIf=\"empAdvanceForm.get('tranDate').hasError(validation.type) && empAdvanceForm.get('tranDate').touched\">\n            {{validation.message}}</div>\n          </div>        \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Employee Name</label>\n        <div class=\"col-sm-3\">\n          <select formControlName=\"ename\" class=\"form-control-plaintext  border\" [(ngModel)]=\"empNameIndex\" (change)=\"onChange($event)\">            \n            <option value=\"\" disabled>Select Name</option>\n            <option *ngFor=\"let i of empData; let num = index;\" [value]=\"num+1  +' . '+  i.eName\">{{num+1}} . {{i.eName}}</option>\n          </select>\n          <div *ngFor=\"let validation of empAdvanceDetails.ename\">\n            <div class=\"invalid-feedback\" *ngIf=\"empAdvanceForm.get('ename').hasError(validation.type) && empAdvanceForm.get('ename').touched\">\n            {{validation.message}}</div>\n          </div>   \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Transaction Type</label>\n        <div class=\"col-sm-3\">\n          <select formControlName=\"tranType\" class=\"form-control-plaintext  border\">\n            <option value=\"\" disabled>Select Bill Type</option>\n            <option>Paid</option>\n            <option>Received</option>\n          </select>\n          <div *ngFor=\"let validation of empAdvanceDetails.tranType\">\n            <div class=\"invalid-feedback\" *ngIf=\"empAdvanceForm.get('tranType').hasError(validation.type) && empAdvanceForm.get('tranType').touched\">\n            {{validation.message}}</div>\n          </div>             \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Amount</label>\n        <div class=\"col-sm-3\">\n          <input type=\"number\" formControlName=\"tranAmount\" class=\"form-control-plaintext  border\" min=\"1\"/>\n          <div *ngFor=\"let validation of empAdvanceDetails.tranAmount\">\n            <div class=\"invalid-feedback\" *ngIf=\"empAdvanceForm.get('tranAmount').hasError(validation.type) && empAdvanceForm.get('tranAmount').touched\">\n            {{validation.message}}</div>\n          </div>          \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Note:</label>\n        <div class=\"col-sm-3\">\n          <input type=\"text\" formControlName=\"note\" class=\"form-control-plaintext  border\"/>\n          \n        </div>\n      </div>\n\n        <div class=\"form-group row ml-1\">\n          <button type=\"submit\" class=\"btn btn-primary border\"  [disabled]=\"!empAdvanceForm.valid\"  *ngIf=\"!empAdvEditMode\">Add</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"updateEmpData()\"  *ngIf=\"empAdvEditMode\" [disabled]=\"!empAdvanceForm.valid\">Update</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"cancel()\">Cancel</button> \n        </div>\n      </form>\n    </div>\n\n    <div class=\" row\" *ngIf=\"advEntryObj.length\">\n      <table class=\"table table-bordered col-sm-8\">\n        <tr>\n          <th>Sr. No</th>\n          <th>EName</th>\n          <th>Tran Date</th>\n          <th>Tran Type</th>\n          <th>Amount</th>\n          <th>Balance</th>\n          <th>Note</th>\n        </tr>\n        <tr *ngFor=\"let p of advEntryObj;let i = index;trackBy: trackChatMessage\">\n          <td>{{i+1}}</td>\n          <td>{{getEmpName(p.eno)}}</td>\n          <td>{{p.tranDate | date:'dd/MM/yyyy'}}</td>\n          <td>{{p.tranType}}</td>\n          <td>{{p.amount}}</td>\n          <td>{{p.balance}}</td>\n          <td>{{p.note}}</td>\n        </tr>\n      </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/employees/employeesAdvance/employeesAdvance.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/employees/employeesAdvance/employeesAdvance.component.ts ***!
  \**************************************************************************/
/*! exports provided: EmployeesAdvanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesAdvanceComponent", function() { return EmployeesAdvanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployeesAdvanceComponent = /** @class */ (function () {
    function EmployeesAdvanceComponent(http, route, router, MainSer, datepipe, fb) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.MainSer = MainSer;
        this.datepipe = datepipe;
        this.fb = fb;
        this.empAdvanceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            tranDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            ename: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            tranType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            tranAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([]))
        });
        this.empAdvanceDetails = {
            'tranDate': [{ type: 'required', message: 'Field is required' }],
            'ename': [{ type: 'required', message: 'Field is required' }],
            'tranType': [{ type: 'required', message: 'Field is required' }],
            'tranAmount': [{ type: 'required', message: 'Field is required' }]
        };
        this.empNameIndex = "";
        this.empAdvEditMode = false;
        this.advEntryObj = [];
        this.empAdvBalance = [];
        this.currentEmpBalance = 0;
    }
    EmployeesAdvanceComponent.prototype.getEmployeesName = function () {
        var _this = this;
        this.http.get("http://localhost:3000/api/getEmpData")
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.empData = resp;
            if (_this.empAdvEditMode) {
                _this.setEmpAdvData();
            }
        });
    };
    EmployeesAdvanceComponent.prototype.addEmployeeAdvance = function () {
        var _this = this;
        if (!this.empAdvEditMode) {
            var tmpIndex = this.empNameIndex.split(' ');
            var index_1 = parseInt(tmpIndex[0]);
            this.http.get("http://localhost:3000/api/getEmpAdvBalance?eno=" + this.empData[index_1 - 1].eno)
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) {
                if (resp.length != 0) {
                    _this.empAdvBalance = resp;
                    _this.currentEmpBalance = parseInt(_this.empAdvBalance[0].balance);
                }
                else {
                    _this.currentEmpBalance = 0;
                }
                _this.insertEmployeeAdvance(_this.empData[index_1 - 1].eno);
            });
            /*     */
        }
    };
    EmployeesAdvanceComponent.prototype.insertEmployeeAdvance = function (empNo) {
        var _this = this;
        if (this.empAdvanceForm.value.tranType == "Paid")
            this.currentEmpBalance += this.empAdvanceForm.value.tranAmount;
        else
            this.currentEmpBalance -= this.empAdvanceForm.value.tranAmount;
        var json = JSON.stringify({ eno: empNo, tranDate: this.empAdvanceForm.value.tranDate, tranType: this.empAdvanceForm.value.tranType, amount: this.empAdvanceForm.value.tranAmount, balance: this.currentEmpBalance, note: this.empAdvanceForm.value.note });
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append("Content-Type", "application/json");
        this.http.post("http://localhost:3000/api/addEmployeeAdvance", json, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            // this.router.navigate(['employees'], {});
            _this.getTodaysRecords();
            alert("Advance Added!");
        });
        this.empAdvanceForm.reset();
    };
    EmployeesAdvanceComponent.prototype.updateEmpData = function () {
        if (this.empAdvEditMode) {
            var tmpIndex = this.empNameIndex.split(' ');
            var index = parseInt(tmpIndex[0]);
            var json = JSON.stringify({ eno: this.empData[index - 1].eno, tranDate: this.empAdvanceForm.value.tranDate, tranType: this.empAdvanceForm.value.tranType, amount: this.empAdvanceForm.value.tranAmount, note: this.empAdvanceForm.value.note, id: this.empEditId });
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            header.append("Content-Type", "application/json");
            this.http.post("http://localhost:3000/api/updateEmpAdvance", json, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) {
                alert("Advance Updated!");
            });
            this.empAdvanceForm.reset();
        }
    };
    EmployeesAdvanceComponent.prototype.cancel = function () {
        this.router.navigate(['employees'], {});
    };
    EmployeesAdvanceComponent.prototype.getEmployeeName = function (name) {
        return name;
    };
    EmployeesAdvanceComponent.prototype.setEmpAdvData = function () {
        this.empAdvanceData = this.MainSer.getEmployeeAdvObj();
        console.log("Emp Adv Data " + this.empData);
        //let index = this.empData.findIndex(e => e.eno == this.empAdvanceData.eno);
        var index = this.empData.map(function (e) { return e.eno; }).indexOf(this.empAdvanceData.eno);
        var tmpEName = (index + 1) + " . " + this.empData[index].eName;
        var latest_date = this.datepipe.transform(this.empAdvanceData.tranDate, 'yyyy-MM-dd');
        this.empAdvanceForm.controls['tranDate'].setValue(latest_date);
        this.empAdvanceForm.controls['ename'].setValue(tmpEName);
        this.empAdvanceForm.controls['tranType'].setValue(this.empAdvanceData.tranType);
        this.empAdvanceForm.controls['tranAmount'].setValue(this.empAdvanceData.amount);
        this.empAdvanceForm.controls['note'].setValue(this.empAdvanceData.note);
        this.empEditId = this.empAdvanceData.id;
    };
    EmployeesAdvanceComponent.prototype.getTodaysRecords = function () {
        var _this = this;
        var todayDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
        this.empAdvanceForm.controls['tranDate'].setValue(todayDate);
        this.http.get("http://localhost:3000/api/advEntryDate?tranDate=" + todayDate)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.advEntryObj = resp;
        });
    };
    EmployeesAdvanceComponent.prototype.getEmpName = function (search) {
        return this.empData[this.empData.map(function (e) { return e.eno; }).indexOf(search)].eName;
    };
    EmployeesAdvanceComponent.prototype.onChange = function (e) {
        console.log("add emp advance++ " + e);
    };
    EmployeesAdvanceComponent.prototype.ngOnInit = function () {
        console.log("EMP Adv Edit Mode: " + this.MainSer.getEmpAdvEditMode());
        this.empAdvEditMode = this.MainSer.getEmpAdvEditMode();
        this.getEmployeesName();
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
        this.getTodaysRecords();
    };
    EmployeesAdvanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'employees-advance-employees',
            template: __webpack_require__(/*! ./employeesAdvance.component.html */ "./src/app/employees/employeesAdvance/employeesAdvance.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            styles: [__webpack_require__(/*! ./employeesAdvance.component.css */ "./src/app/employees/employeesAdvance/employeesAdvance.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EmployeesAdvanceComponent);
    return EmployeesAdvanceComponent;
}());



/***/ }),

/***/ "./src/app/employees/search-employee-advance/search-employee-advance.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/employees/search-employee-advance/search-employee-advance.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/employees/search-employee-advance/search-employee-advance.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/employees/search-employee-advance/search-employee-advance.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3>Search Employee Advance</h3>\n</div>\n<div class=\"containerDiv\">\n  \n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label bold\">Select Employee Name</label>\n    <div class=\"col-sm-2\">\n      <select class=\"form-control-plaintext  border\" [(ngModel)]=\"empNameIndex\">            \n        <option value=\"\" disabled>Select Name</option>\n        <option  *ngFor=\"let i of empData; let num = index\">{{num+1}} . {{i.eName}}</option>\n      </select>   \n    </div>\n    <div  class=\"col-sm-1\">\n      <button (click)=\"fGetLastNilBalanceRecord()\" class=\"btn btn-primary\" [disabled]=\"!empNameIndex\">Submit</button>\n    </div>\n    \n  </div>\n  \n  <div  class=\"row\" *ngIf=\"empSearchData\">\n    \n    <table class=\"table table-bordered col-sm-8\">\n        <tr>\n          <th>Name</th>\n          <th>Paid</th>\n          <th>Received</th>\n          <th>Total Due</th>\n        </tr>\n        <tr>\n          <td>{{lastSelectedEmpName}}</td>\n          <td>{{paidAmount}}</td>\n          <td>{{receivedAmount}}</td>\n          <td>{{paidAmount - receivedAmount}}</td>\n        </tr>\n    </table>\n\n    <div>\n      <b>Select Date: &nbsp; </b>\n      <b>From </b> <input type=\"date\" [(ngModel)]=\"inputStartDate\" [max]=\"todaySysDate\"/>&nbsp;\n      <b>To </b> <input type=\"date\" [(ngModel)]=\"inputEndDate\" [max]=\"todaySysDate\"/>&nbsp;\n      <button class=\"btn btn-primary\" (click)=\"getAdvanceReport('manual')\" [disabled]=\"!inputStartDate || !inputEndDate\">Submit</button>\n       <br><br>\n    </div>\n\n    <div class=\"col-sm-12 row\"  *ngIf=\"empSearchData.length\">\n      <h5 *ngIf=\"type == 'manual'\"><b>Report From:</b> {{startDate}} <b>To:</b> {{endDate}}</h5>\n      <h5 *ngIf=\"type != 'manual'\"><b>Advance Payment Due Report:</b></h5>\n\n      <!-- <div class=\"col-sm-12 row\">Search : &nbsp; <input  [(ngModel)]=\"searchString\"></div><br> -->\n      <table class=\"table table-bordered mt-1\">\n        <tr>\n          <th>Sr.No</th>\n          <th>Date</th>\n          <th>Type</th>\n          <th>Amount</th>\n          <th>Balance</th>\n          <th>Note</th>\n<!--           <th>Action</th>\n -->        </tr>     \n\n\n        <tr  *ngFor=\"let e of empSearchData | filter : 'tranType' : searchString;let i = index;trackBy: trackChatMessage\">\n          <td>{{i+1}}</td>\n          <td>{{e.tranDate  | date:'dd/MM/yyyy'}}</td>\n          <td>{{e.tranType}}</td>\n          <td>{{getAmountNCalcTotal(e.amount)}}</td>\n          <td>{{e.balance}}</td>\n          <td>{{e.note}}</td>\n<!--           <td><button (click)=\"editEmployeeAdvance(e)\" class=\"btn btn-primary\">Edit</button></td>\n -->        </tr>\n        <!-- <tr>\n          <td colspan=\"3\"><b>Total</b></td>\n          <td colspan=\"2\">Error: {{totalAmt}}</td>\n        </tr> -->\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employees/search-employee-advance/search-employee-advance.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/employees/search-employee-advance/search-employee-advance.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SearchEmployeeAdvanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchEmployeeAdvanceComponent", function() { return SearchEmployeeAdvanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchEmployeeAdvanceComponent = /** @class */ (function () {
    function SearchEmployeeAdvanceComponent(http, cdref, datepipe, MainSer, router) {
        this.http = http;
        this.cdref = cdref;
        this.datepipe = datepipe;
        this.MainSer = MainSer;
        this.router = router;
        this.empNameIndex = "";
        this.paidAmount = 0;
        this.receivedAmount = 0;
        this.lastSelectedEmpName = "";
        this.totalAmt = 0;
        this.balanceZeroNotFound = false;
        this.cdref.detach();
    }
    SearchEmployeeAdvanceComponent.prototype.getEmployeesName = function () {
        var _this = this;
        this.http.get("http://localhost:3000/api/getEmpData")
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) { return _this.empData = resp; });
    };
    SearchEmployeeAdvanceComponent.prototype.getAdvanceReport = function (type) {
        var _this = this;
        if (type == "auto") {
            var tmpTodaysDate = new Date();
            this.endDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
            tmpTodaysDate.setDate(tmpTodaysDate.getDate() - 30);
            this.startDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
            this.inputEndDate = "";
            this.inputStartDate = "";
        }
        else {
            this.endDate = this.datepipe.transform(this.inputEndDate, 'yyyy-MM-dd');
            this.startDate = this.datepipe.transform(this.inputStartDate, 'yyyy-MM-dd');
            this.type = type;
        }
        this.lastSelectedEmpName = this.empNameIndex;
        this.empNameIndexSplit = this.empNameIndex.split(' ');
        var tmpeName = this.empNameIndexSplit[0];
        var index = parseInt(tmpeName);
        this.http.get("http://localhost:3000/api/searchEmpAdvance?eno=" + this.empData[index - 1].eno + "&startDate=" + this.startDate + "&endDate=" + this.endDate)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.empSearchData = resp;
            if (_this.empSearchData.length == 0)
                alert("No Data Found!");
            _this.calculateAdvance();
        });
    };
    SearchEmployeeAdvanceComponent.prototype.fGetLastNilBalanceRecord = function () {
        var _this = this;
        this.type = "auto";
        this.lastSelectedEmpName = this.empNameIndex;
        this.empNameIndexSplit = this.empNameIndex.split(' ');
        var tmpeName = this.empNameIndexSplit[0];
        var index = parseInt(tmpeName);
        this.http.get("http://localhost:3000/api/getEmpLastNilBalRecord?eno=" + this.empData[index - 1].eno)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            if (resp.length != 0) {
                _this.balanceZeroNotFound = false;
                _this.lastNilBalRecord = resp[0];
                _this.fGetDueRecord();
            }
            else {
                _this.balanceZeroNotFound = true;
                _this.http.get("http://localhost:3000/api/getEmpLastNilBalRecordBalZeroNotFound?eno=" + _this.empData[index - 1].eno)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (resp) {
                    if (resp.length != 0) {
                        _this.lastNilBalRecord = resp[0];
                        _this.fGetDueRecord();
                    }
                    else {
                        _this.empSearchData = resp;
                        _this.calculateAdvance();
                        alert("No Record Found!");
                    }
                });
            }
        });
    };
    SearchEmployeeAdvanceComponent.prototype.fGetDueRecord = function () {
        var _this = this;
        this.http.get("http://localhost:3000/api/getEmpDueRecords?eno=" + this.lastNilBalRecord.eno + "&id=" + this.lastNilBalRecord.id)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.empSearchData = resp;
            _this.calculateAdvance();
            if (_this.empSearchData.length == 0) {
                alert("No Record Found!");
            }
        });
    };
    SearchEmployeeAdvanceComponent.prototype.calculateAdvance = function () {
        var minusNo = 0;
        if (this.type != "manual" && !this.balanceZeroNotFound)
            minusNo = 1;
        this.paidAmount = 0;
        this.receivedAmount = 0;
        console.log("calculateAdvance");
        for (var i = 0; i < this.empSearchData.length - minusNo; i++) {
            if (this.empSearchData[i].tranType == "Paid")
                this.paidAmount += this.empSearchData[i].amount;
            else
                this.receivedAmount += this.empSearchData[i].amount;
        }
        //return this.paidAmount-this.receivedAmount;
    };
    SearchEmployeeAdvanceComponent.prototype.getAmountNCalcTotal = function (amt) {
        this.totalAmt += amt;
        return amt;
    };
    SearchEmployeeAdvanceComponent.prototype.editEmployeeAdvance = function (empAdvObj) {
        this.MainSer.setEmpAdvEditMode(true);
        this.MainSer.setEmployeeAdvObj(empAdvObj);
        this.router.navigate(['employeesAdvance'], {});
    };
    SearchEmployeeAdvanceComponent.prototype.ngOnInit = function () {
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
        this.getEmployeesName();
    };
    SearchEmployeeAdvanceComponent.prototype.ngAfterContentChecked = function () {
        this.cdref.detectChanges();
    };
    SearchEmployeeAdvanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-employee-advance',
            template: __webpack_require__(/*! ./search-employee-advance.component.html */ "./src/app/employees/search-employee-advance/search-employee-advance.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [__webpack_require__(/*! ./search-employee-advance.component.css */ "./src/app/employees/search-employee-advance/search-employee-advance.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SearchEmployeeAdvanceComponent);
    return SearchEmployeeAdvanceComponent;
}());



/***/ }),

/***/ "./src/app/farsan/add-farsan-entry/add-farsan-entry.component.css":
/*!************************************************************************!*\
  !*** ./src/app/farsan/add-farsan-entry/add-farsan-entry.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/farsan/add-farsan-entry/add-farsan-entry.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/farsan/add-farsan-entry/add-farsan-entry.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3></h3>\n  <h3 *ngIf=\"!empAdvEditMode\">Add Farsan Entry</h3>\n  <h3 *ngIf=\"empAdvEditMode\">Edit Farsan Entry</h3>\n</div>\n<div class=\"containerDiv row\">\n  <div class=\"table  col-sm-5\" >\n    <form [formGroup]=\"entryForm\" (ngSubmit)=\"addCustomerEntry()\" >\n      <div class=\"form-group row\">\n        <label class=\"col-sm-6 col-form-label\">Transaction Date:</label>\n        <div class=\"col-sm-6\">\n          <input type=\"date\" disabled=\"true\" formControlName=\"tranDate\" class=\"form-control-plaintext border\" [max]=\"todaySysDate\"/>\n          <div *ngFor=\"let validation of entryDetails.tranDate\">\n            <div class=\"invalid-feedback\" *ngIf=\"entryForm.get('tranDate').hasError(validation.type) && entryForm.get('tranDate').touched\">\n            {{validation.message}}</div>\n          </div>        \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-6 col-form-label\">Customer Name:</label>\n        <div class=\"col-sm-6\">\n          <select formControlName=\"name\" class=\"form-control-plaintext  border\" [(ngModel)]=\"custNameIndex\" (change)=\"onChange($event)\">            \n            <option value=\"\" disabled>Select Name</option>\n            <option *ngFor=\"let i of custData; let num = index;\" [value]=\"num+1  +' . '+  i.name\">{{num+1}} . {{i.name}}</option>\n          </select>\n          <div *ngFor=\"let validation of entryDetails.name\">\n            <div class=\"invalid-feedback\" *ngIf=\"entryForm.get('name').hasError(validation.type) && entryForm.get('name').touched\">\n            {{validation.message}}</div>\n          </div>   \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-6 col-form-label\">Transaction Type:</label>\n        <div class=\"col-sm-6\">\n          <select formControlName=\"tranType\" [(ngModel)]=\"transactionType\" class=\"form-control-plaintext  border\" (change)=\"onChange($event)\">\n            <option value=\"\" disabled>Select Bill Type</option>\n            <option>Add</option>\n            <option>Paid</option>\n            <option>Cash</option>\n          </select>\n          <div *ngFor=\"let validation of entryDetails.tranType\">\n            <div class=\"invalid-feedback\" *ngIf=\"entryForm.get('tranType').hasError(validation.type) && entryForm.get('tranType').touched\">\n            {{validation.message}}</div>\n          </div>             \n        </div>\n      </div>    \n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-6 col-form-label\">Quantity:</label>\n        <div class=\"col-sm-6\">\n          <input type=\"number\" formControlName=\"qty\" class=\"form-control-plaintext  border\" min=\"1\"/>\n          <div *ngFor=\"let validation of entryDetails.qty\">\n            <div class=\"invalid-feedback\" *ngIf=\"entryForm.get('qty').hasError(validation.type) && entryForm.get('qty').touched\">\n            {{validation.message}}</div>\n          </div>          \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-6 col-form-label\">Packed Date:</label>\n        <div class=\"col-sm-6\">\n          <input type=\"date\"  [attr.disabled]=\"transactionType == 'Paid' ? 'disabled' : null\" formControlName=\"packedDate\" class=\"form-control-plaintext border\" [max]=\"todaySysDate\"/>\n          <div *ngFor=\"let validation of entryDetails.packedDate\">\n            <div class=\"invalid-feedback\" *ngIf=\"entryForm.get('packedDate').hasError(validation.type) && entryForm.get('packedDate').touched\">\n            {{validation.message}}</div>\n          </div>  \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-6 col-form-label\">Batch No:</label>\n        <div class=\"col-sm-6\">\n          <input type=\"number\" [attr.disabled]=\"transactionType == 'Paid' ? 'disabled' : null\" formControlName=\"batchNo\" class=\"form-control-plaintext  border\" min=\"1\"/>\n\n          <div *ngFor=\"let validation of entryDetails.batchNo\">\n            <div class=\"invalid-feedback\" *ngIf=\"entryForm.get('batchNo').hasError(validation.type) && entryForm.get('batchNo').touched\">\n            {{validation.message}}</div>\n          </div> \n                 \n        </div>\n      </div>      \n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-6 col-form-label\">Rate:</label>\n        <div class=\"col-sm-6\">\n          <input type=\"number\"  formControlName=\"rate\" class=\"form-control-plaintext  border\" min=\"1\" />\n          <div *ngFor=\"let validation of entryDetails.rate\">\n            <div class=\"invalid-feedback\" *ngIf=\"entryForm.get('rate').hasError(validation.type) && entryForm.get('rate').touched\">\n            {{validation.message}}</div>\n          </div>          \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-6 col-form-label\">Total Bill:</label>\n        <div class=\"col-sm-6\">\n          <input type=\"number\" disabled=\"true\" formControlName=\"totalBill\" class=\"form-control-plaintext  border\" min=\"1\" [ngModel]=\"entryForm.value.qty*entryForm.value.rate\"/>\n          <div *ngFor=\"let validation of entryDetails.totalBill\">\n            <div class=\"invalid-feedback\" *ngIf=\"entryForm.get('totalBill').hasError(validation.type) && entryForm.get('totalBill').touched\">\n            {{validation.message}}</div>\n          </div>          \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-6 col-form-label\">Note:</label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" formControlName=\"note\" class=\"form-control-plaintext  border\"/>\n          \n        </div>\n      </div>\n\n        <div class=\"form-group row ml-1\">\n          <button type=\"submit\" class=\"btn btn-primary border\"  [disabled]=\"!entryForm.valid\"  *ngIf=\"!empAdvEditMode\">Add</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"updateEmpData()\"  *ngIf=\"empAdvEditMode\" [disabled]=\"!entryForm.valid\">Update</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"cancel()\">Cancel</button> \n        </div>\n      </form>\n    </div>\n    <div class=\"col-sm-7\" *ngIf=\"billEntryObj.length\">\n      <table class=\"table table-bordered \">\n        <tr>\n          <th>Sr. No</th>\n          <th>Name</th>\n          <th>Tran Date</th>\n          <th>Tran Type</th>\n          <th>Qty</th>\n          <th>Rate</th>\n          <th>Total Bill</th>\n          <th>Balance</th>\n          <th>Note</th>\n        </tr>\n        <tr *ngFor=\"let p of billEntryObj;let i = index;trackBy: trackChatMessage\">\n          <td>{{i+1}}</td>\n          <td>{{getCustName(p.cno)}}</td>\n          <td>{{p.trandate | date:'dd/MM/yyyy'}}</td>\n          <td>{{p.trantype}}</td>\n          <td>{{p.qty}}</td>\n          <td>{{p.rate}}</td>\n          <td>{{p.totalBill}}</td>\n          <td>{{p.balance}}</td>\n          <td>{{p.note}}</td>\n        </tr>\n      </table>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/farsan/add-farsan-entry/add-farsan-entry.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/farsan/add-farsan-entry/add-farsan-entry.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddFarsanEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFarsanEntryComponent", function() { return AddFarsanEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddFarsanEntryComponent = /** @class */ (function () {
    function AddFarsanEntryComponent(http, route, router, MainSer, datepipe, fb) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.MainSer = MainSer;
        this.datepipe = datepipe;
        this.fb = fb;
        this.entryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            tranDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            tranType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            packedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            batchNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            totalBill: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([]))
        });
        this.entryDetails = {
            'tranDate': [{ type: 'required', message: 'Field is required' }],
            'name': [{ type: 'required', message: 'Field is required' }],
            'qty': [{ type: 'required', message: 'Field is required' }],
            'tranType': [{ type: 'required', message: 'Field is required' }],
            'packedDate': [{ type: 'required', message: 'Field is required' }],
            'batchNo': [{ type: 'required', message: 'Field is required' }],
            'rate': [{ type: 'required', message: 'Field is required' }],
            'totalBill': [{ type: 'required', message: 'Field is required' }]
        };
        this.custNameIndex = "";
        this.empAdvEditMode = false;
        this.billEntryObj = [];
        this.custUnpaidBalance = [];
        this.currentBalance = 0;
        this.transactionType = "Add";
    }
    AddFarsanEntryComponent.prototype.getCustomersName = function () {
        var _this = this;
        this.http.get("http://localhost:3000/api/getFarsanCustData")
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.custData = resp;
            if (_this.empAdvEditMode) {
                // this.setEmpAdvData();
            }
        });
    };
    AddFarsanEntryComponent.prototype.addCustomerEntry = function () {
        var _this = this;
        if (!this.empAdvEditMode) {
            var tmpIndex = this.custNameIndex.split(' ');
            var index_1 = parseInt(tmpIndex[0]);
            this.http.get("http://localhost:3000/api/getCustBalance?cno=" + this.custData[index_1 - 1].cno)
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) {
                if (resp.length != 0) {
                    _this.custUnpaidBalance = resp;
                    _this.currentBalance = parseInt(_this.custUnpaidBalance[0].balance);
                }
                else {
                    _this.currentBalance = 0;
                }
                _this.insertCustomerBill(_this.custData[index_1 - 1].cno);
            });
            /*     */
        }
    };
    AddFarsanEntryComponent.prototype.insertCustomerBill = function (custNo) {
        var _this = this;
        if (this.entryForm.value.tranType == "Add")
            this.currentBalance += this.entryForm.value.totalBill;
        else if (this.entryForm.value.tranType == "Paid")
            this.currentBalance -= this.entryForm.value.totalBill;
        var json = JSON.stringify({
            cno: custNo,
            trandate: this.entryForm.value.tranDate,
            trantype: this.entryForm.value.tranType,
            qty: this.entryForm.value.qty,
            packeddate: this.entryForm.value.packedDate,
            batchno: this.entryForm.value.batchNo,
            rate: this.entryForm.value.rate,
            totalbill: this.entryForm.value.totalBill,
            balance: this.currentBalance,
            note: this.entryForm.value.note
        });
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append("Content-Type", "application/json");
        this.http.post("http://localhost:3000/api/addFarsanCustEntry", json, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            // this.router.navigate(['employees'], {});
            _this.getTodaysRecords();
            alert("Advance Added!");
        });
        this.entryForm.reset();
        this.entryForm.controls['rate'].setValue(50);
    };
    AddFarsanEntryComponent.prototype.cancel = function () {
        this.router.navigate(['farsan'], {});
    };
    AddFarsanEntryComponent.prototype.getTodaysRecords = function () {
        var _this = this;
        var todayDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
        this.entryForm.controls['tranDate'].setValue(todayDate);
        this.http.get("http://localhost:3000/api/billEntryDate?trandate=" + todayDate)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.billEntryObj = resp;
        });
    };
    AddFarsanEntryComponent.prototype.getCustName = function (search) {
        return this.custData[this.custData.map(function (e) { return e.cno; }).indexOf(search)].name;
    };
    AddFarsanEntryComponent.prototype.onChange = function (e) {
        console.log("transactionType" + this.transactionType);
        console.log("transactionType" + e);
        if (this.transactionType == "Add" || this.transactionType == "Cash") {
            this.entryForm.get('packedDate').setValue(null);
            this.entryForm.get('batchNo').setValue(null);
        }
        else {
            this.entryForm.get('packedDate').setValue("2000-01-01");
            this.entryForm.get('batchNo').setValue(0);
        }
        this.entryForm.get('note').setValue(null);
    };
    AddFarsanEntryComponent.prototype.ngOnInit = function () {
        console.log("EMP Adv Edit Mode: " + this.MainSer.getEmpAdvEditMode());
        this.empAdvEditMode = this.MainSer.getEmpAdvEditMode();
        this.entryForm.controls['rate'].setValue(50);
        //
        this.getCustomersName();
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
        this.getTodaysRecords();
    };
    AddFarsanEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-farsan-entry',
            template: __webpack_require__(/*! ./add-farsan-entry.component.html */ "./src/app/farsan/add-farsan-entry/add-farsan-entry.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            styles: [__webpack_require__(/*! ./add-farsan-entry.component.css */ "./src/app/farsan/add-farsan-entry/add-farsan-entry.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddFarsanEntryComponent);
    return AddFarsanEntryComponent;
}());



/***/ }),

/***/ "./src/app/farsan/addFarsanCustomers/add-farsan-customers.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/farsan/addFarsanCustomers/add-farsan-customers.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/farsan/addFarsanCustomers/add-farsan-customers.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/farsan/addFarsanCustomers/add-farsan-customers.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3 *ngIf=\"!editMode\">Add Farsan Customer</h3>\n  <h3 *ngIf=\"editMode\">Edit Farsan Customer</h3>\n</div>\n<div class=\"containerDiv\">\n  <div >\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"addRecord()\" >\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2\">Name:</label>\n          <div class=\"col-sm-3\">\n            <input type=\"text\" formControlName=\"name\" class=\"form-control-plaintext border\"/>\n            <div *ngFor=\"let validation of addFormDetails.name\">\n              <div class=\"invalid-feedback\" *ngIf=\"addForm.get('name').hasError(validation.type) && addForm.get('name').touched\">\n              {{validation.message}}</div>\n            </div>        \n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Address</label>\n          <div class=\"col-sm-3\">\n              <textarea row=\"3\" formControlName=\"add\" class=\"form-control-plaintext border\"></textarea>\n              <div *ngFor=\"let validation of addFormDetails.add\"><div class=\"invalid-feedback\" *ngIf=\"addForm.get('add').hasError(validation.type) && addForm.get('add').touched\">{{validation.message}}</div></div>\n          </div>\n        </div>        \n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Area Name</label>\n          <div class=\"col-sm-3\">\n            <select formControlName=\"areaName\" class=\"form-control-plaintext border\">\n              <option value=\"\" disabled>Select</option>\n              <option>Aundh</option>\n\n              <option>Baner</option>\n              <option>Balaji Nagar</option>              \n              <option>Bibewadi</option>\n              <option>Bhandarkar Road</option>\n\n              <option>Dattawadi</option>\n              <option>Dhankawadi</option>\n              <option>Deccan</option>\n              <option>Dhayari</option>\n\n              <option>Erandawane</option>\n\n              <option>Kothrud</option>\n              <option>Karvenagar</option>\n              <option>Katraj</option>\n\n              <option>Mandai</option>\n\n              <option>Narhe</option>\n\n\n              <option>Pashan</option>\n\n              <option>Shivaji Nagar</option>\n              <option>Sinhgad Road</option> \n              <option>Shivne</option>       \n              <option>Swarget</option>\n              <option>SB Road</option>\n             \n              <option>Warje</option>\n              \n              \n            </select>\n            <div *ngFor=\"let validation of addFormDetails.areaName\">\n              <div class=\"invalid-feedback\" *ngIf=\"addForm.get('areaName').hasError(validation.type) && addForm.get('areaName').touched\">\n              {{validation.message}}</div>\n            </div>             \n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2\">Mobile No:</label>\n          <div class=\"col-sm-3\">\n            <input type=\"number\" formControlName=\"moNo\" class=\"form-control-plaintext border\" max=\"10\" min=\"10\"/>\n            <div *ngFor=\"let validation of addFormDetails.moNo\">\n              <div class=\"invalid-feedback\" *ngIf=\"addForm.get('moNo').hasError(validation.type) && addForm.get('moNo').touched\">\n              {{validation.message}}</div>\n            </div>        \n          </div>\n        </div>        \n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">DOJ</label>\n          <div class=\"col-sm-3\">\n            <input type=\"date\" formControlName=\"DOJ\" class=\"form-control-plaintext border\" [max]=\"todaySysDate\"/>\n            <div *ngFor=\"let validation of addFormDetails.DOJ\">\n              <div class=\"invalid-feedback\" *ngIf=\"addForm.get('DOJ').hasError(validation.type) && addForm.get('DOJ').touched\">\n              {{validation.message}}</div>\n            </div>        \n          </div>\n        </div>\n\n        <div class=\"form-group row ml-1\">\n          <button type=\"submit\" class=\"btn btn-primary border\"  [disabled]=\"!addForm.valid\"  *ngIf=\"!editMode\">Add</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"updateData()\"  *ngIf=\"editMode\" [disabled]=\"!addForm.valid\">Update</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"cancelAdd()\">Cancel</button> \n        </div>\n      </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/farsan/addFarsanCustomers/add-farsan-customers.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/farsan/addFarsanCustomers/add-farsan-customers.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddFarsanCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFarsanCustomersComponent", function() { return AddFarsanCustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddFarsanCustomersComponent = /** @class */ (function () {
    function AddFarsanCustomersComponent(http, route, router, MainSer, datepipe) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.MainSer = MainSer;
        this.datepipe = datepipe;
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            add: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            areaName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            moNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            DOJ: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]))
        });
        this.addFormDetails = {
            'name': [{ type: 'required', message: 'Name is required' }],
            'add': [{ type: 'required', message: 'Address is required' }],
            'areaName': [{ type: 'required', message: 'Area Name is required' }],
            'moNo': [{ type: 'required', message: 'Mobile No is required' }],
            'DOJ': [{ type: 'required', message: 'DOJ is required' }]
        };
        this.editMode = false;
    }
    AddFarsanCustomersComponent.prototype.addRecord = function () {
        var _this = this;
        if (!this.editMode) {
            var json = JSON.stringify({ name: this.addForm.value.name, cadd: this.addForm.value.add, area: this.addForm.value.areaName, mobileno: this.addForm.value.moNo, joindate: this.addForm.value.DOJ });
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            header.append("Content-Type", "application/json");
            this.http.post("http://localhost:3000/api/addFarsanCustomer", json, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) {
                alert("Customer Added Successfully!");
                _this.router.navigate(['farsan'], {});
            });
            this.addForm.reset();
        }
    };
    AddFarsanCustomersComponent.prototype.cancelAdd = function () {
        this.router.navigate(['farsan'], {});
    };
    AddFarsanCustomersComponent.prototype.updateData = function () {
        var _this = this;
        var json = JSON.stringify({ cno: this.editObj.cno, name: this.addForm.value.name, cadd: this.addForm.value.add, area: this.addForm.value.areaName, mobileno: this.addForm.value.moNo, joindate: this.addForm.value.DOJ });
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append("Content-Type", "application/json");
        this.http.post("http://localhost:3000/api/updateFarsanCustomer", json, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            alert("Record Updated!");
            _this.router.navigate(['farsan'], {});
        });
    };
    AddFarsanCustomersComponent.prototype.ngOnInit = function () {
        if (this.MainSer.getEditMode()) {
            this.editMode = true;
            this.editObj = this.MainSer.getEditObj();
            var latest_date = this.datepipe.transform(this.editObj.joindate, 'yyyy-MM-dd');
            this.addForm.controls['name'].setValue(this.editObj.name);
            this.addForm.controls['add'].setValue(this.editObj.cadd);
            this.addForm.controls['areaName'].setValue(this.editObj.area);
            this.addForm.controls['moNo'].setValue(this.editObj.mobileno);
            this.addForm.controls['DOJ'].setValue(latest_date);
        }
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
    };
    AddFarsanCustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-farsan-customers',
            template: __webpack_require__(/*! ./add-farsan-customers.component.html */ "./src/app/farsan/addFarsanCustomers/add-farsan-customers.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            styles: [__webpack_require__(/*! ./add-farsan-customers.component.css */ "./src/app/farsan/addFarsanCustomers/add-farsan-customers.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], AddFarsanCustomersComponent);
    return AddFarsanCustomersComponent;
}());



/***/ }),

/***/ "./src/app/farsan/farsanCustomers/farsan-customers.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/farsan/farsanCustomers/farsan-customers.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/farsan/farsanCustomers/farsan-customers.component.html":
/*!************************************************************************!*\
  !*** ./src/app/farsan/farsanCustomers/farsan-customers.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3>Farsan Dashboard</h3>\n</div>\n<div class=\"containerDiv row\">\n  <div class=\"col-xs-6\">\n    <div>\n      <span *ngIf=\"custData.length\">Search: <input  [(ngModel)]=\"searchString\"></span> \n      &nbsp;<button class=\"btn btn-success \" (click)=\"addnew()\" >Add New</button>\n      &nbsp;<button class=\"btn btn-success\" (click)=\"addEntry()\">Add Entry</button>\n      &nbsp;<button class=\"btn btn-success\" (click)=\"router.navigate(['searchCustBills'], {});\">Search</button>\n    </div>\n    <br>\n    <table  class=\"table border\" *ngIf=\"custData.length\">\n      <tr>\n          <th>No</th>\n          <th style=\"width: 180px\">Name</th>\n          <th style=\"width: 180px\">Add</th>\n          <th>Area</th>\n          <th>Mobile No</th>\n          <th>Joining Date</th>\n          <th>Action</th>\n      </tr>\n      <tr *ngFor=\"let e of custData | filter : 'cname' : searchString;let i = index;\">\n        <td>{{i+1}}</td>\n        <td>{{e.name}}</td>\n        <td>{{e.cadd}}</td>\n        <td>{{e.area}}</td>\n        <td>{{e.mobileno}}</td>\n        <td>{{e.joindate | date:'dd/MM/yyyy'}}</td>\n        <td><button (click)=\"editEmployee(e)\" class=\"btn btn-primary\">Edit</button></td>\n      </tr>\n      \n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/farsan/farsanCustomers/farsan-customers.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/farsan/farsanCustomers/farsan-customers.component.ts ***!
  \**********************************************************************/
/*! exports provided: FarsanCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarsanCustomersComponent", function() { return FarsanCustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FarsanCustomersComponent = /** @class */ (function () {
    function FarsanCustomersComponent(http, route, router, MainSer) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.MainSer = MainSer;
        this.custData = [];
    }
    FarsanCustomersComponent.prototype.getFarsanCustomersData = function () {
        var _this = this;
        this.http.get("http://localhost:3000/api/getFarsanCustData")
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.custData = resp;
            if (_this.custData.length == 0)
                alert("No Records Found!");
            console.log("CustData " + _this.custData);
        });
    };
    FarsanCustomersComponent.prototype.addnew = function () {
        this.MainSer.setCreateMode(true);
        this.router.navigate(['addFarsanCustomers'], {});
    };
    FarsanCustomersComponent.prototype.editEmployee = function (editObj) {
        this.MainSer.setEditMode(true);
        this.MainSer.setEditObj(editObj);
        this.router.navigate(['addFarsanCustomers'], {});
    };
    FarsanCustomersComponent.prototype.addEntry = function () {
        this.MainSer.setEmpAdvAddMode(true);
        this.router.navigate(['addFarsanEntry'], {});
    };
    FarsanCustomersComponent.prototype.ngOnInit = function () {
        this.getFarsanCustomersData();
        this.MainSer.setCreateMode(false);
        this.MainSer.setEditMode(false);
        this.MainSer.setEmpAdvEditMode(false);
        this.MainSer.setEmpAdvAddMode(false);
        console.log("custData  " + this.custData);
    };
    FarsanCustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'farsan-customers',
            template: __webpack_require__(/*! ./farsan-customers.component.html */ "./src/app/farsan/farsanCustomers/farsan-customers.component.html"),
            styles: [__webpack_require__(/*! ./farsan-customers.component.css */ "./src/app/farsan/farsanCustomers/farsan-customers.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]])
    ], FarsanCustomersComponent);
    return FarsanCustomersComponent;
}());



/***/ }),

/***/ "./src/app/farsan/search-cust-bills/search-cust-bills.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/farsan/search-cust-bills/search-cust-bills.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/farsan/search-cust-bills/search-cust-bills.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/farsan/search-cust-bills/search-cust-bills.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3>Search Customer Bills</h3>\n</div>\n<div class=\"containerDiv\">\n  \n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label bold\">Select Customer Name</label>\n    <div class=\"col-sm-2\">\n      <select class=\"form-control-plaintext  border\" [(ngModel)]=\"nameIndex\">            \n        <option value=\"\" disabled>Select Name</option>\n        <option  *ngFor=\"let i of custData; let num = index\">{{num+1}} . {{i.name}}</option>\n      </select>   \n    </div>\n    <div  class=\"col-sm-1\">\n      <button (click)=\"fGetLastNilBalanceRecord()\" class=\"btn btn-primary\" [disabled]=\"!nameIndex\">Submit</button>\n    </div>\n    \n  </div>\n  \n  <div  class=\"row\" *ngIf=\"searchData\">\n    \n    <table class=\"table table-bordered col-sm-8\">\n        <tr>\n          <th>Name</th>\n          <th>Cash Qty/Bills</th>\n          <th>Add Qty/Bills</th>\n          <th>Paid Qty/Paid</th>\n          <th>Total Due Qty/Bills</th>          \n        </tr>\n        <tr>\n          <td rowspan=\"2\">{{lastSelectedName}}</td>\n          <td>{{cashQty}}</td>\n          <td>{{addQty}}</td>\n          <td>{{paidQty}}</td>\n          <td>{{addQty - paidQty}}</td>\n        </tr>\n        <tr>\n          <td>{{cashBills}}</td>\n          <td>{{addAmount}}</td>\n          <td>{{paidAmount}}</td>\n          <td>{{addAmount - paidAmount}}</td>\n        </tr>\n    </table>\n\n    <div>\n      <b>Select Date: &nbsp; </b>\n      <b>From </b> <input type=\"date\" [(ngModel)]=\"inputStartDate\" [max]=\"todaySysDate\"/>&nbsp;\n      <b>To </b> <input type=\"date\" [(ngModel)]=\"inputEndDate\" [max]=\"todaySysDate\"/>&nbsp;\n      <button class=\"btn btn-primary\" (click)=\"getBillsReport('manual')\" [disabled]=\"!inputStartDate || !inputEndDate\">Submit</button>\n      \n      &nbsp;<button class=\"btn btn-primary\" (click)=\"getYearlyReport()\" [disabled]=\"!inputStartDate\">Yearly Report</button>\n    </div>\n\n    <div class=\"col-sm-12 row\"  *ngIf=\"searchData.length && !yearReportFlag\">\n      <h5 *ngIf=\"type == 'manual'\"><b>Report From:</b> {{startDate}} <b>To:</b> {{endDate}}</h5>\n      <h5 *ngIf=\"type != 'manual'\"><b>Farsan Customer Payment Due Report:</b></h5>\n\n\n<!--       <div class=\"col-sm-12 row\">Search : &nbsp; <input  [(ngModel)]=\"searchString\"></div><br>\n -->      <table class=\"table table-bordered mt-1\">\n        <tr>\n          <th>Sr.No</th>\n          <th>Date</th>\n          <th>Type</th>\n          <th>Qty</th>\n          <th>Packed Date</th>\n          <th>Batch No</th>\n          <th>Rate</th>\n          <th>Total Bill</th>\n          <th>Balance</th>\n          <th>Note</th>\n        </tr>     \n\n\n        <tr  *ngFor=\"let v of searchData | filter : 'tranType' : searchString;let i = index;trackBy: trackChatMessage\">\n          <td>{{i+1}}</td>\n          <td>{{v.trandate  | date:'dd/MM/yyyy'}}</td>\n          <td>{{v.trantype}}</td>\n          <td>{{v.qty}}</td>\n          <td>{{v.packeddate | date:'dd/MM/yyyy'}}</td>\n          <td>{{v.batchno}}</td>\n          <td>{{v.rate}}</td>\n          <td>{{v.totalBill}}</td>\n          <td>{{v.balance}}</td>\n          <td>{{v.note}}</td>\n<!--           <td><button (click)=\"editVendorBill(v)\" class=\"btn btn-primary\">Edit</button></td>\n -->        </tr>\n        <!-- <tr>\n          <td colspan=\"3\"><b>Total</b></td>\n          <td colspan=\"2\">Error: {{totalAmt}}</td>\n        </tr> -->\n      </table>\n    </div>\n    <div class=\"col-sm-8 row mt-1\"  *ngIf=\"yearReportFlag\">\n      <h5 *ngIf=\"type != 'manual'\"><b> {{nameIndex}} Report For {{selectedYear}}: {{getYearlyProductsSale()}}</b></h5>\n      <table class=\"table table-bordered mt-1\">\n        <tr>\n          <td *ngFor=\"let m of monthNames\"><b>{{m}}</b></td>\n        </tr>\n        <tr>\n          <td *ngFor=\"let val of yearlyDataObj\">{{val}}</td>\n        </tr>    \n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/farsan/search-cust-bills/search-cust-bills.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/farsan/search-cust-bills/search-cust-bills.component.ts ***!
  \*************************************************************************/
/*! exports provided: SearchCustBillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCustBillsComponent", function() { return SearchCustBillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchCustBillsComponent = /** @class */ (function () {
    function SearchCustBillsComponent(http, cdref, datepipe, MainSer, router) {
        this.http = http;
        this.cdref = cdref;
        this.datepipe = datepipe;
        this.MainSer = MainSer;
        this.router = router;
        this.nameIndex = "";
        this.paidAmount = 0;
        this.addAmount = 0;
        this.cashBills = 0;
        this.lastSelectedName = "";
        this.totalAmt = 0;
        this.balanceZeroNotFound = false;
        this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        this.yearlyDataObj = [];
        this.yearReportFlag = false;
        this.addQty = 0;
        this.paidQty = 0;
        this.cashQty = 0;
        this.cdref.detach();
    }
    SearchCustBillsComponent.prototype.getCustomersName = function () {
        var _this = this;
        this.http.get("http://localhost:3000/api/getFarsanCustData")
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) { return _this.custData = resp; });
    };
    SearchCustBillsComponent.prototype.getYearlyReport = function () {
        var _this = this;
        this.yearReportFlag = true;
        this.selectedYear = this.datepipe.transform(this.inputStartDate, 'yyyy');
        this.lastSelectedName = this.nameIndex;
        this.nameIndexSplit = this.nameIndex.split(' ');
        var tmpeName = this.nameIndexSplit[0];
        var index = parseInt(tmpeName);
        var yearSearchData;
        this.http.get("http://localhost:3000/api/getYearlyProductsSale?cno=" + this.custData[index - 1].cno + "&year=" + this.selectedYear)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            yearSearchData = resp;
            console.log(yearSearchData);
            var _loop_1 = function (i) {
                var obj = yearSearchData.filter(function (item) {
                    var date = new Date(item.packeddate);
                    return date.getMonth() === i;
                });
                _this.yearlyDataObj[i] = obj.reduce(function (total, obj) { return obj.qty + total; }, 0);
            };
            for (var i = 0; i < 12; i++) {
                _loop_1(i);
            }
            console.log(_this.yearlyDataObj);
            if (yearSearchData.length == 0)
                alert("No Data Found!");
        });
    };
    SearchCustBillsComponent.prototype.getBillsReport = function (type) {
        var _this = this;
        if (type == "auto") {
            var tmpTodaysDate = new Date();
            this.endDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
            tmpTodaysDate.setDate(tmpTodaysDate.getDate() - 30);
            this.startDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
            this.inputEndDate = "";
            this.inputStartDate = "";
        }
        else {
            this.yearReportFlag = false;
            this.endDate = this.datepipe.transform(this.inputEndDate, 'yyyy-MM-dd');
            this.startDate = this.datepipe.transform(this.inputStartDate, 'yyyy-MM-dd');
            this.type = type;
        }
        this.lastSelectedName = this.nameIndex;
        this.nameIndexSplit = this.nameIndex.split(' ');
        var tmpeName = this.nameIndexSplit[0];
        var index = parseInt(tmpeName);
        this.http.get("http://localhost:3000/api/searchFarsanCustBills?cno=" + this.custData[index - 1].cno + "&startDate=" + this.startDate + "&endDate=" + this.endDate)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.searchData = resp;
            if (_this.searchData.length == 0)
                alert("No Data Found!");
            _this.calculateAdvance();
        });
    };
    SearchCustBillsComponent.prototype.calculateAdvance = function () {
        this.paidAmount = 0;
        this.addAmount = 0;
        this.cashBills = 0;
        this.addQty = 0;
        this.paidQty = 0;
        this.cashQty = 0;
        var minusNo = 0;
        if (this.type != "manual" && !this.balanceZeroNotFound)
            minusNo = 1;
        for (var i = 0; i < this.searchData.length - minusNo; i++) {
            if (this.searchData[i].trantype == "Paid") {
                this.paidAmount += this.searchData[i].totalBill;
                this.paidQty += this.searchData[i].qty;
            }
            else if (this.searchData[i].trantype == "Add") {
                this.addAmount += this.searchData[i].totalBill;
                this.addQty += this.searchData[i].qty;
            }
            else if (this.searchData[i].trantype == "Cash") {
                this.cashBills += this.searchData[i].totalBill;
                this.cashQty += this.searchData[i].qty;
            }
        }
    };
    SearchCustBillsComponent.prototype.getAmountNCalcTotal = function (amt) {
        this.totalAmt += amt;
        return amt;
    };
    SearchCustBillsComponent.prototype.editVendorBill = function (vendorBillObj) {
        this.MainSer.setEditMode(true);
        this.MainSer.setEditObj(vendorBillObj);
        this.router.navigate(['vendorAddPaidBill'], {});
    };
    SearchCustBillsComponent.prototype.getYearlyProductsSale = function () {
        return this.yearlyDataObj.reduce(function (a, b) { return a + b; }, 0);
    };
    SearchCustBillsComponent.prototype.fGetLastNilBalanceRecord = function () {
        var _this = this;
        this.type = "auto";
        this.yearReportFlag = false;
        this.lastSelectedName = this.nameIndex;
        this.nameIndexSplit = this.nameIndex.split(' ');
        var tmpeName = this.nameIndexSplit[0];
        var index = parseInt(tmpeName);
        this.http.get("http://localhost:3000/api/getCustBillLastNilBalRecord?cno=" + this.custData[index - 1].cno)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            if (resp.length != 0) {
                _this.balanceZeroNotFound = false;
                _this.lastNilBalRecord = resp[0];
                _this.fGetDueRecord();
            }
            else {
                _this.balanceZeroNotFound = true;
                _this.http.get("http://localhost:3000/api/getCustBillLastNilBalRecordBalZeroNotFound?cno=" + _this.custData[index - 1].cno)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (resp) {
                    if (resp.length != 0) {
                        _this.lastNilBalRecord = resp[0];
                        _this.fGetDueRecord();
                    }
                    else {
                        _this.searchData = resp;
                        _this.calculateAdvance();
                        alert("No Record Found!");
                    }
                });
            }
        });
    };
    SearchCustBillsComponent.prototype.fGetDueRecord = function () {
        var _this = this;
        this.http.get("http://localhost:3000/api/getFarsanCustDueRecords?cno=" + this.lastNilBalRecord.cno + "&id=" + this.lastNilBalRecord.id)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.searchData = resp;
            _this.calculateAdvance();
            if (_this.searchData.length == 0) {
                alert("No Record Found!");
            }
        });
    };
    SearchCustBillsComponent.prototype.ngOnInit = function () {
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
        this.getCustomersName();
    };
    SearchCustBillsComponent.prototype.ngAfterContentChecked = function () {
        this.cdref.detectChanges();
    };
    SearchCustBillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-cust-bills',
            template: __webpack_require__(/*! ./search-cust-bills.component.html */ "./src/app/farsan/search-cust-bills/search-cust-bills.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [__webpack_require__(/*! ./search-cust-bills.component.css */ "./src/app/farsan/search-cust-bills/search-cust-bills.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SearchCustBillsComponent);
    return SearchCustBillsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table\r\n{\r\nfont-size: 20px;\r\n} \r\nbutton, input, optgroup, select, textarea {\r\n    /* margin: 0; */\r\n     font-family: Arial, Helvetica, sans-serif!important; \r\n    /* font-size: inherit; */\r\n     line-height: inherit; \r\n    font-size: 13.3333px !important;\r\n    font-family: Arial !important;\r\n} \r\n*, ::after, ::before{\r\n    box-sizing: content-box !important;\r\n} \r\n.billDiv tr td, .billDiv tr th{\r\n    padding: 0px 10px 0px 9px;\r\n  } \r\n.billDiv div\r\n{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    width: 448px;\r\n    font-size: 20px;\r\n} \r\n.billDiv div:nth(1)\r\n{\r\n    text-align: left;\r\n} \r\n.billDiv th:nth(1)\r\n{\r\n    width:30px;\r\n} \r\n.billDiv td:nth(2){\r\n    TEXT-align: left;\r\n} \r\n.billDiv th\r\n{\r\n    text-align: left;\r\n} \r\n.billDiv\r\n{\r\n    margin-top: 25px;\r\n    padding-top: 5px;\r\n    width: 565px;\r\n    font-size: 12px;\r\n    border: thin dotted #000;\r\n\r\n} \r\n.row{\r\n    margin-right: 0px;\r\n} \r\n@media print {\r\n  body *{\r\n    visibility: hidden !important;   \r\n    }\r\n   \r\n  }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n <div class=\"header\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\"><h3>BHADAIT</h3></div>\n    <div class=\"col-sm-6 mt-1\" *ngIf=\"true\">\n      \n      <input [disabled]=\"managerMode || ownerMode || bhukumShopMode\" type=\"password\" [(ngModel)]=\"userPassword\" placeholder=\"Enter Password\">\n      &nbsp;<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userPassword && loginBtnText=='Sign In'\" (click)=\"setAdminMode()\">{{loginBtnText}}</button>\n      &nbsp;<button  *ngIf=\"!this.MainSer.orderMode\" class=\"btn btn-success\" (click)=\"router.navigate(['customerBills'], {});\">Customer Bills</button> \n      &nbsp;<button  *ngIf=\"ownerMode\" class=\"btn btn-success\" (click)=\"clearData()\">Clear Data</button> \n\n<!--        &nbsp;<button class=\"btn btn-success\" (click)=\"router.navigate(['billsMenu'], {});\">Bill Menu</button> \n --> \n    </div>\n  </div>\n</div>\n  <div class=\"containerDiv\" *ngIf=\"!this.MainSer.orderMode  && this.items?.length\">\n        \n    <!-- <form [formGroup]=\"billForm\" (ngSubmit)=\"onSubmit()\">\n        <div *ngFor=\"let validation of menuListDetails.menuQty\">\n            <div  *ngIf=\"billForm.get('menuQty').hasError(validation.type) && billForm.get('menuQty').dirty || billForm.get('menuQty').touched\">\n             {{validation.message}}\n            </div>\n        </div> \n          <div *ngFor=\"let validation of menuListDetails.itemList\">\n              <div  *ngIf=\"billForm.get('itemList').hasError(validation.type) && billForm.get('itemList').dirty || billForm.get('itemList').touched\">\n               {{validation.message}}\n              </div>\n          </div> \n          <select  formControlName=\"itemList\">\n              <option value=\"\" disabled>Select</option>\n              <option value=\"{{num}}\" *ngFor=\"let i of items; let num = index\">{{num+1}} {{i.itemname}}</option>\n            \n            </select>\n            <input type=\"number\" formControlName=\"menuQty\"/>\n            <button type=\"submit\">Submit</button>\n      </form> -->\n\n\n Menu Name:\n <select  [(ngModel)]=\"menuIndex\" tabindex=\"0\" id=\"menu\">\n    <option value=\"\">0 Select Menu</option>\n    <option value=\"{{num}}\" *ngFor=\"let i of items; let num = index\">{{num+1}} {{i.itemname}}</option>\n  <!--  <option value=\"1\">2 Dahi Misal</option>\n    <option value=\"2\">3 Vada Pav</option> -->\n  </select> \n  Quantity:\n  <input type=\"number\" [(ngModel)]=\"menuQty\" min=\"1\" (keyup)=\"onKeyup($event)\" (keypress)=\"onKeypress($event)\"/>\n  <button (click)=\"addMenu()\">Add</button> \n\n  <div id=\"billDiv\" class=\"billDiv\" *ngIf=\"bill.length\" >\n    <!-- <div><img src=\"./logo.png\" width=\"200px\" height=\"100px\" align=\"center\"/></div> -->\n        <div *ngIf=\"branchName=='karveroad'\">BHADAIT MISAL<BR>Lane No.14, Prabhat Road, Near Seed<BR>Infotech, Pune-411004</div>  \n        <div  *ngIf=\"branchName=='Bhukum'\">BHADAIT MISAL<BR>Kanta Smruti, Opp. Muktai Lawns<BR>Bhukum, Paud Road, Pune-412108</div>\n\n        <!-- <div>BILL NO:{{billno}} DATE: {{latest_date}} TIME: {{latest_time}}</div> -->\n    <table cellpadding=3 >\n        <!-- <tr>\n            <th colspan=\"5\" style='text-align:center'></th>\n            <th></th>\n        </tr> -->\n        <tr>\n          <th align=\"left\" colspan=\"2\" >Bill No: {{billno}}<br>Name: {{cname | titlecase}}</th>\n          <th  colspan=\"3\" style='text-align:right;'>Date: {{latest_date | date:'dd/MM/yyyy'}}<br>Time: {{latest_time}}</th>\n          <th></th>\n        </tr> \n      <tr>\n          <th>Sr.No</th>\n          <th style=\"width: 126px\" >Item Name</th>\n          <th >Qty</th>\n          <th >Price</th>\n          <th >Amount</th>\n          <th >Action</th>\n      </tr>\n      <tr *ngFor=\"let b of bill; let i = index\">\n           <td>{{i+1}}</td>\n           <td [innerHTML]=\"b.itemname\"></td>\n           <td align=\"right\">{{b.qty}}</td>\n           <td align=\"right\">{{b.price}}</td>\n           <td align=\"right\">{{b.amount}}</td>\n           <td><button (click)=\"removeMenu(i)\">Remove</button></td>\n      </tr>      \n      <tr>\n        <td colspan=\"4\" align=\"left\" style='font-weight:bold;'>TOTAL</td>\n        <td colspan=\"1\"  align=\"right\" style='font-weight:bold;'>Rs.{{totalPrice}}</td>\n        <td><button (click)=\"printBill()\">Print</button></td>\n      </tr>\n      <tr style='font-size:18px' \n       *ngIf=\"spicy || noTarri || tarriSeperate || noOnion || noPohe || packSeperate || noMatki || noPav || noBundi || exOnion || exMatki || mediumRassa || spicyRassa || nonSpicyRassa || exBundi || spNote\">\n        <td style='font-weight:bold;'>Note:</td>\n        <td colspan=\"4\" style=\"width: 300px;font-weight:bold;\">\n          <span *ngIf=\"mediumRassa\">&nbsp; <b>*</b> {{mediumRassa}} M</span>\n          <span *ngIf=\"spicyRassa\">&nbsp; <b>*</b> {{spicyRassa}} S</span>\n          <span *ngIf=\"nonSpicyRassa\">&nbsp; <b>*</b> {{nonSpicyRassa}} NS</span>\n          <span *ngIf=\"spicy\">&nbsp; <b>*</b> Spicy</span>\n          <span *ngIf=\"noTarri\">&nbsp; <b>*</b> No Tarri</span>\n          <span *ngIf=\"tarriSeperate\">&nbsp; <b>*</b> Tarri Seperate</span>\n          <span *ngIf=\"noOnion\">&nbsp; <b>*</b> No Onion</span>\n          <span *ngIf=\"noPohe\">&nbsp; <b>*</b> No Pohe</span>\n          <span *ngIf=\"noMatki\">&nbsp; <b>*</b> No Matki</span>\n          <span *ngIf=\"noPav\">&nbsp; <b>*</b> No Pav</span>\n          <span *ngIf=\"noBundi\">&nbsp; <b>*</b> No Bundi</span>\n          <span *ngIf=\"exOnion\">&nbsp; <b>*</b> Ex Onion</span>\n          <span *ngIf=\"exMatki\">&nbsp; <b>*</b> Ex Matki</span>\n          <span *ngIf=\"packSeperate\">&nbsp; <b>*</b> Pack Seperate</span>\n          <span *ngIf=\"exBundi\">&nbsp; <b>*</b> Ex Bundi</span>\n          <span *ngIf=\"spNote\">&nbsp; <b>*</b> {{spNote}}</span>\n        </td>\n        <td></td>\n      </tr>\n      <tr>\n          <td colspan=\"5\" style='text-align:center;font-weight:bold;'>**THANK YOU**<BR>**VISIT AGAIN**</td>\n            <td></td>\n      </tr>      \n    </table>\n\n    <div *ngIf=\"emp\">\n        <ul>\n          <li *ngFor=\"let e of emp\">{{e.itemno}} {{e.itemname}} {{e.price}}</li>\n        </ul>\n      </div>\n  </div>\n\n  <div style=\"margin-top: 10px;font-weight: bold;\">\n    <span *ngIf=\"bill.length\">\n    <tr>\n      <td>\n        <table class=\"\">\n        <tr>\n          <td>CN: <input type=\"text\" style=\"width: 50px;\" [(ngModel)]=\"cname\"></td>\n\n          <td><b>Instruction:</b></td>\n          <td>Medium <input id=\"mediumRassa\" type=\"number\" style=\"width: 50px;\" [(ngModel)]=\"mediumRassa\" min=\"0\"></td>\n          <td>&nbsp;&nbsp;Spicy <input style=\"width: 50px;\" type=\"number\" [(ngModel)]=\"spicyRassa\"></td>\n          <td>Non Spicy <input type=\"number\" style=\"width: 50px;\" [(ngModel)]=\"nonSpicyRassa\"></td>\n\n        </tr>\n        \n        <tr>\n          <td><input type=\"checkbox\" value=\"Spicy\" [disabled]=\"noTarri\" [(ngModel)]=\"spicy\"/> 1. Spicy&nbsp;&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Non Spicy\" [disabled]=\"spicy || tarriSeperate\" [(ngModel)]=\"noTarri\"/> 2. No Tarri&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Tarri Seperate\" [disabled]=\"noTarri\" [(ngModel)]=\"tarriSeperate\"/> 3. Tarri Sep.&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"No Onion\" [disabled]=\"exOnion\" [(ngModel)]=\"noOnion\"/> 4. No Onion&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"No Matki\" [disabled]=\"exMatki\" [(ngModel)]=\"noMatki\"/> 5. No Matki&nbsp;&nbsp;</td>\n        </tr>\n        <tr>\n          <td><input type=\"checkbox\" value=\"No Pav\" [disabled]=\"\" [(ngModel)]=\"noPav\"/> 6. No Pav&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"No Bundi\" [disabled]=\"exBundi\" [(ngModel)]=\"noBundi\"/> 7. No Bundi&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Ex Onion\" [disabled]=\"noOnion\" [(ngModel)]=\"exOnion\"/> 8. Ex Onion&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Ex Matki\" [disabled]=\"noMatki\" [(ngModel)]=\"exMatki\"/> 9. Ex Matki&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Pack Seperate\" [(ngModel)]=\"packSeperate\"/> 0. Pack Seperate&nbsp;&nbsp;</td>\n        </tr>\n        <tr>\n          <td><input type=\"checkbox\" value=\"No Pohe\" [disabled]=\"\" [(ngModel)]=\"noPohe\"/> 11. No Pohe&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Ex Bundi\" [disabled]=\"noBundi\" [(ngModel)]=\"exBundi\"/> 11. Ex Bundi&nbsp;&nbsp;</td>\n          <td colspan=\"3\"><input type=\"text\" [(ngModel)]=\"spNote\" placeholder=\"Special Note\"/></td>\n        </tr>\n      </table>\n       <br>\n      </td>\n    </tr>\n       \n      \n  </span>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { IpService } from './ip.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, datepipe, MainSer, router) {
        var _this = this;
        this.http = http;
        this.datepipe = datepipe;
        this.MainSer = MainSer;
        this.router = router;
        this.bill = [];
        this.menuIndex = "0";
        this.menuQty = 1;
        this.totalPrice = 0;
        this.todayDate = new Date();
        this.spicy = false;
        this.noTarri = false;
        this.tarriSeperate = false;
        this.noOnion = false;
        this.noPohe = false;
        this.noMatki = false;
        this.noPav = false;
        this.noBundi = false;
        this.exOnion = false;
        this.exMatki = false;
        this.packSeperate = false;
        this.exBundi = false;
        this.spNote = "";
        this.mediumRassa = 0;
        this.spicyRassa = 0;
        this.nonSpicyRassa = 0;
        this.cname = "";
        this.loginBtnText = "Sign In";
        this.managerMode = false;
        this.ownerMode = false;
        this.bhukumShopMode = false;
        this.userPassword = "";
        this.cNote = "";
        this.branchName = this.MainSer.getbranchName();
        if (this.MainSer.autoIP == true) {
            this.MainSer.IPAddress = window.location.hostname;
            this.MainSer.getItemsData().subscribe(function (resp) { return _this.items = resp; });
        }
        else {
            this.MainSer.IPAddress = this.MainSer.staticIPAddress;
            this.MainSer.getItemsData().subscribe(function (resp) { return _this.items = resp; });
        }
        this.subscription1 = this.MainSer.mangerMode.subscribe(function (value) {
            _this.managerMode = value;
            if (_this.managerMode)
                _this.loginBtnText = "Sign Out";
        });
        this.subscription2 = this.MainSer.ownerMode.subscribe(function (value) {
            _this.ownerMode = value;
            if (_this.ownerMode)
                _this.loginBtnText = "Sign Out";
        });
        this.subscription3 = this.MainSer.bhukumShopMode.subscribe(function (value) {
            _this.bhukumShopMode = value;
            if (_this.bhukumShopMode)
                _this.loginBtnText = "Sign Out";
        });
    }
    /*billForm = new FormGroup({
      itemList: new FormControl('', Validators.compose([
        Validators.required
      ])),
      menuQty: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ]))
    })
  
  
    menuListDetails = {
      'itemList': [
        {type: 'required', message: 'Please Select Item Name'}
      ],
      'menuQty': [
        {type: 'required', message: 'Please Enter Quantity'}
      ]
    }
    onSubmit()
    {
      console.log(this.billForm.value)
    }*/
    HomeComponent.prototype.addMenu = function () {
        if (this.menuIndex != "" && this.menuQty > 0) {
            this.todayDate = new Date();
            this.latest_date = this.datepipe.transform(this.todayDate, 'MM-dd-yyyy');
            this.latest_time = this.datepipe.transform(this.todayDate, 'shortTime');
            this.amt = parseInt(this.items[this.menuIndex].price) * (this.menuQty);
            this.bill.push({ "itemno": this.menuIndex, "itemname": this.items[this.menuIndex].itemname, "price": this.items[this.menuIndex].price, "qty": this.menuQty, "amount": this.amt });
            this.totalPrice += this.amt;
            this.menuIndex = "0";
            document.getElementById("menu").focus();
            this.menuQty = 1;
        }
    };
    HomeComponent.prototype.removeMenu = function (index) {
        //console.log(index);
        // this.amt=parseInt(this.bill[index].qty)*parseInt(this.bill[index].price)
        this.totalPrice -= parseInt(this.bill[index].qty) * parseInt(this.bill[index].price);
        this.bill.splice(index, 1);
        document.getElementById("menu").focus();
        if (this.bill.length == 0) {
            this.resetBillsVaribale(false);
        }
    };
    HomeComponent.prototype.getCNote = function () {
        this.cNote = "";
        if (this.mediumRassa)
            this.cNote += "<b>*</b>" + this.mediumRassa + " M";
        if (this.spicyRassa)
            this.cNote += "&nbsp; <b>*</b>" + this.spicyRassa + " S";
        if (this.nonSpicyRassa)
            this.cNote += "&nbsp; <b>*</b>" + this.nonSpicyRassa + " NS";
        if (this.spicy)
            this.cNote += "&nbsp; <b>*</b> Spicy";
        if (this.noTarri)
            this.cNote += "&nbsp; <b>*</b> No Tarri";
        if (this.tarriSeperate)
            this.cNote += "&nbsp; <b>*</b> Tarri Seperate";
        if (this.noOnion)
            this.cNote += "&nbsp; <b>*</b> No Onion";
        if (this.noPohe)
            this.cNote += "&nbsp; <b>*</b> No Pohe";
        if (this.noMatki)
            this.cNote += "&nbsp; <b>*</b> No Matki";
        if (this.noPav)
            this.cNote += "&nbsp; <b>*</b> No Pav";
        if (this.noBundi)
            this.cNote += "&nbsp; <b>*</b> No Bundi";
        if (this.exOnion)
            this.cNote += "&nbsp; <b>*</b> Ex Onion";
        if (this.exMatki)
            this.cNote += "&nbsp; <b>*</b> Ex Matki";
        if (this.packSeperate)
            this.cNote += "&nbsp; <b>*</b> Pack Seperate";
        if (this.exBundi)
            this.cNote += "&nbsp; <b>*</b> Ex Bundi";
        if (this.spNote)
            this.cNote += "&nbsp; <b>*</b> " + this.spNote;
    };
    HomeComponent.prototype.addBill = function () {
        var _this = this;
        this.getCNote();
        var _loop_1 = function (i) {
            json = JSON.stringify({ itemno: parseInt(this_1.bill[i].itemno) + 1, qty: this_1.bill[i].qty, billno: this_1.billno, date: this_1.latest_date, time: this_1.latest_time, cname: this_1.cname, note: this_1.cNote });
            header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            header.append("Content-Type", "application/json");
            this_1.http.post("http://localhost:3000/api/add", json, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                // console.log("success"+res);
                if (i == _this.bill.length - 1)
                    _this.printBillSuccess();
            }, function (error) {
                if (i == _this.bill.length - 1)
                    alert("Please Check Command Promt");
            });
        };
        var this_1 = this, json, header;
        for (var i = 0; i < this.bill.length; i++) {
            _loop_1(i);
        }
    };
    HomeComponent.prototype.printBillSuccess = function () {
        this.billno++;
        window.print();
        this.bill = []; //.splice(0,this.bill.length);
        this.totalPrice = 0;
        this.copyMessage(this.cname);
        this.resetBillsVaribale(false);
        document.getElementById("menu").focus();
    };
    HomeComponent.prototype.printBill = function () {
        if (this.bill.length) {
            //this.cname =this.cname.replace("+", "");
            // this.addBill()
            //Adding bill once bill no is generated
            this.getBillNo();
            /* var mywindow = window.open('', 'PRINT', 'height=400,width=600');
       
             mywindow.document.write('<html>');
             mywindow.document.write('<body>');
             //mywindow.document.write('<h1>' + document.title  + '</h1>');
             mywindow.document.write(document.getElementById('billDiv').innerHTML);
             mywindow.document.write('</body></html>');
       
             mywindow.document.close(); // necessary for IE >= 10
             mywindow.focus(); // necessary for IE >= 10
       
             mywindow.print();
             mywindow.close();
       
             return true;*/
        }
    };
    HomeComponent.prototype.resetBillsVaribale = function (flag) {
        this.spicy = flag;
        this.noTarri = flag;
        this.tarriSeperate = flag;
        this.noOnion = flag;
        this.noPohe = flag;
        this.noMatki = flag;
        this.noPav = flag;
        this.noBundi = flag;
        this.exOnion = flag;
        this.exMatki = flag;
        this.packSeperate = flag;
        this.exBundi = flag;
        this.spNote = "";
        this.mediumRassa = 0;
        this.spicyRassa = 0;
        this.nonSpicyRassa = 0;
        this.cname = "";
    };
    HomeComponent.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    HomeComponent.prototype.getItemsData = function () {
        var _this = this;
        if (localStorage.getItem('menu') == null) {
            this.http.get("http://localhost:3000/api/GetItemsData")
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) { return _this.items = resp; });
        }
        else {
            this.items = JSON.parse(localStorage.getItem('menu'));
        }
    };
    HomeComponent.prototype.getBillNo = function () {
        var _this = this;
        this.todayDate = new Date();
        this.latest_date = this.datepipe.transform(this.todayDate, 'MM-dd-yyyy');
        this.latest_time = this.datepipe.transform(this.todayDate, 'shortTime');
        this.http.get("http://localhost:3000/api/billno?date=" + this.latest_date)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.billno = resp;
            //this.setBillNo()
            // console.log(this.billno)
            if (_this.billno != "")
                _this.billno = _this.billno[0].billno + 1;
            else
                _this.billno = 1;
            _this.addBill();
        });
    };
    HomeComponent.prototype.noteCheckboxClick = function (chkBoxName) {
        if (chkBoxName == "spicy") {
            if (this.spicy == true)
                this.spicy = false;
            else
                this.spicy = true;
        }
        if (chkBoxName == "noTarri") {
            if (this.noTarri == true)
                this.noTarri = false;
            else
                this.noTarri = true;
        }
        if (chkBoxName == "tarriSeperate") {
            if (this.tarriSeperate == true)
                this.tarriSeperate = false;
            else
                this.tarriSeperate = true;
        }
        if (chkBoxName == "noOnion") {
            if (this.noOnion == true)
                this.noOnion = false;
            else
                this.noOnion = true;
        }
        if (chkBoxName == "noPohe") {
            if (this.noPohe == true)
                this.noPohe = false;
            else
                this.noPohe = true;
        }
        if (chkBoxName == "noMatki") {
            if (this.noMatki == true)
                this.noMatki = false;
            else
                this.noMatki = true;
        }
        if (chkBoxName == "noPav") {
            if (this.noPav == true)
                this.noPav = false;
            else
                this.noPav = true;
        }
        if (chkBoxName == "noBundi") {
            if (this.noBundi == true)
                this.noBundi = false;
            else
                this.noBundi = true;
        }
        if (chkBoxName == "exOnion") {
            if (this.exOnion == true)
                this.exOnion = false;
            else
                this.exOnion = true;
        }
        if (chkBoxName == "exMatki") {
            if (this.exMatki == true)
                this.exMatki = false;
            else
                this.exMatki = true;
        }
        if (chkBoxName == "packSeperate") {
            if (this.packSeperate == true)
                this.packSeperate = false;
            else
                this.packSeperate = true;
        }
        if (chkBoxName == "exBundi") {
            if (this.exBundi == true)
                this.exBundi = false;
            else
                this.exBundi = true;
        }
    };
    HomeComponent.prototype.setAdminMode = function () {
        if (this.loginBtnText == "Sign In") {
            if (this.userPassword == "!moze#321") {
                this.MainSer.setLoginMode("manager", true);
                this.sendDB_BackupMail();
            }
            else if (this.userPassword == "bhadait@3210") {
                this.MainSer.setLoginMode("owner", true);
                this.sendDB_BackupMail();
            }
            else if (this.userPassword == "!tiruAvi#321") {
                this.MainSer.setLoginMode("bhukumShop", true);
                this.sendDB_BackupMail();
            }
            else if (this.userPassword == "kitchen") { //kitchen
                this.router.navigate(['kitchenOrders'], {});
            }
            else if (this.userPassword == "takeorder") { //take order
                this.router.navigate(['selectTable'], {});
                this.MainSer.waiterMode = true;
            }
            else {
                if (this.bhukumShopMode == true)
                    alert("Wrong Password!");
                else {
                    if (this.userPassword != "bhadait@3210") {
                        this.MainSer.setLoginMode("manager", true);
                        this.sendDB_BackupMail();
                    }
                }
            }
        }
        else {
            if (!this.MainSer.getLoginMode('owner').value) {
                this.loginBtnText = "Sign In";
                this.userPassword = "";
                this.MainSer.setLoginMode("manager", false);
                this.MainSer.setLoginMode("owner", false);
                this.MainSer.setLoginMode("bhukumShop", false);
            }
        }
    };
    HomeComponent.prototype.sendDB_BackupMail = function () {
        this.MainSer.orderMode = false;
        /* let onlineOffline: boolean = navigator.onLine;
      
          if(onlineOffline==true){
            this.http.get("http://localhost:3000/api/sendDB_BackupMail?branch="+this.branchName)
            .map(res=>res)
            .subscribe(resp=>{
              console.log("DB Backup Mail Sent..");
            });
          }
          else{
            alert("Check Your Internet Connection!")
          }  */
    };
    HomeComponent.prototype.ngOnInit = function () {
        // this.MainSer.setLoginMode("manager",false);
        // this.MainSer.setLoginMode("owner",false);
        if (this.bhukumShopMode == false) {
            this.MainSer.setLoginMode("manager", true);
            this.sendDB_BackupMail();
            //alert(this.bhukumShopMode);
        }
        this.setAdminMode();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.subscription1)
            this.subscription1.unsubscribe();
        if (this.subscription2)
            this.subscription2.unsubscribe();
        if (this.subscription3)
            this.subscription3.unsubscribe();
    };
    HomeComponent.prototype.keyEvent = function (event) {
        //console.log(event.keyCode);
        if (event.keyCode == 107) {
            this.printBill();
        }
        //32)
        if (event.keyCode == 192) {
            document.getElementById("menu").focus();
            this.menuIndex = "0";
            this.menuQty = 1;
        }
        if (event.keyCode == 109) {
            document.getElementById("mediumRassa").focus();
        }
        if (event.keyCode == 49 && !this.noTarri)
            this.noteCheckboxClick("spicy");
        if (event.keyCode == 50 && !this.spicy)
            this.noteCheckboxClick("noTarri");
        if (event.keyCode == 51 && !this.noTarri)
            this.noteCheckboxClick("tarriSeperate");
        if (event.keyCode == 52 && !this.exOnion)
            this.noteCheckboxClick("noOnion");
        if (event.keyCode == 189)
            this.noteCheckboxClick("noPohe");
        if (event.keyCode == 53 && !this.exMatki)
            this.noteCheckboxClick("noMatki");
        if (event.keyCode == 54)
            this.noteCheckboxClick("noPav");
        if (event.keyCode == 55 && !this.exBundi)
            this.noteCheckboxClick("noBundi");
        if (event.keyCode == 187 && !this.noBundi)
            this.noteCheckboxClick("exBundi");
        if (event.keyCode == 56 && !this.noOnion)
            this.noteCheckboxClick("exOnion");
        if (event.keyCode == 57 && !this.noMatki)
            this.noteCheckboxClick("exMatki");
        if (event.keyCode == 48)
            this.noteCheckboxClick("packSeperate");
    };
    HomeComponent.prototype.onKeyup = function (event) {
        if (event.keyCode === 13) {
            this.addMenu();
        }
    };
    HomeComponent.prototype.onKeypress = function (event) {
        var pattern = /[0-9\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    HomeComponent.prototype.clearData = function () {
        var _this = this;
        if (window.confirm('Are sure you want to clear DATA?')) {
            this.todayDate = new Date();
            this.latest_date = this.datepipe.transform(this.todayDate, 'MM-dd-yyyy');
            var json = JSON.stringify({ date: this.latest_date });
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            header.append("Content-Type", "application/json");
            this.http.post("http://" + this.MainSer.IPAddress + ":3000/api/clearBills", json, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                alert("Deleted " + res + " rows - Please wait deleting pending orders.");
                _this.deletePendingOrderData();
            }, function (error) {
                alert("Please Check Command Promt");
            });
        }
    };
    HomeComponent.prototype.deletePendingOrderData = function () {
        this.todayDate = new Date();
        this.latest_date = this.datepipe.transform(this.todayDate, 'yyyy-MM-dd');
        var json = JSON.stringify({ date: this.latest_date });
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        header.append("Content-Type", "application/json");
        this.http.post("http://" + this.MainSer.IPAddress + ":3000/api/clearPendingOrder", json, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            alert("Deleted " + res + " rows. Thanks for your patience.");
        }, function (error) {
            alert("Please Check Command Promt");
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "latest_date", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "keyEvent", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main.service.ts":
/*!*********************************!*\
  !*** ./src/app/main.service.ts ***!
  \*********************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _calculation_addcalculation_addCalculation_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculation/addcalculation/addCalculation.model */ "./src/app/calculation/addcalculation/addCalculation.model.ts");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
        //IPAddress = "localhost";
        this.IPAddress = "https://nodeserver-mogq.onrender.com";
        //For Bhukum
        //branchName="Bhukum";
        //totalTables = 9;
        // IPAddress;
        this.autoIP = false;
        this.staticIPAddress = "https://nodeserver-mogq.onrender.com";
        //For KarveRoad
        this.branchName = "karveroad";
        this.totalTables = 32;
        this.editMode = false;
        this.createMode = false;
        this.empAdvEditMode = false;
        this.empAdvAddMode = false;
        //Order System
        this.tableNo = 1;
        this.orderMode = true;
        this.customerOrderMode = false;
        this.currentTableFoodStatus = '';
        this.beepAudio = new Audio();
        this.beepTableAudio = new Audio();
        this.readyStatusCount = 0;
        this.mangerMode = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.ownerMode = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.bhukumShopMode = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.waiterMode = false;
        this.addCalculationObj = new _calculation_addcalculation_addCalculation_model__WEBPACK_IMPORTED_MODULE_2__["addCalculation"]();
    }
    MainService.prototype.getbranchName = function () {
        return this.branchName;
    };
    MainService.prototype.setAddCalculationObject = function (obj) {
        this.addCalculationObj = obj;
    };
    MainService.prototype.getAddCalculationObject = function () {
        return this.addCalculationObj;
    };
    //* **For Employee Data, Vendor Data **** */
    MainService.prototype.getEditObj = function () {
        return this.editObj;
    };
    MainService.prototype.setEditObj = function (obj) {
        this.editObj = obj;
    };
    MainService.prototype.setCreateMode = function (flag) {
        this.createMode = flag;
    };
    MainService.prototype.getCreateMode = function () {
        return this.createMode;
    };
    MainService.prototype.getEditMode = function () {
        return this.editMode;
    };
    MainService.prototype.setEditMode = function (flag) {
        this.editMode = flag;
    };
    //* **For Employee Data, Vendor Data **** */
    //**For Employe Advance */
    MainService.prototype.getEmployeeAdvObj = function () {
        return this.empAdvObj;
    };
    MainService.prototype.setEmployeeAdvObj = function (obj) {
        this.empAdvObj = obj;
    };
    MainService.prototype.setEmpAdvAddMode = function (flag) {
        this.empAdvAddMode = flag;
    };
    MainService.prototype.getEmpAdvAddMode = function () {
        return this.empAdvAddMode;
    };
    MainService.prototype.getEmpAdvEditMode = function () {
        return this.empAdvEditMode;
    };
    MainService.prototype.setEmpAdvEditMode = function (flag) {
        this.empAdvEditMode = flag;
    };
    //**User Login Mode */
    MainService.prototype.setLoginMode = function (user, value) {
        // this.adminMode = value;
        if (user == "manager")
            this.mangerMode.next(value);
        if (user == "owner")
            this.ownerMode.next(value);
        if (user == "bhukumShop")
            this.bhukumShopMode.next(value);
    };
    MainService.prototype.getLoginMode = function (user) {
        if (user == "manager")
            return this.mangerMode;
        if (user == "owner")
            return this.ownerMode;
        if (user == "bhukumShop")
            return this.bhukumShopMode;
    };
    MainService.prototype.getItemsData = function () {
        var data;
        return this.http.get(this.IPAddress + "/api/GetItemsData")
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.setTableNo = function (tableNo) {
        this.tableNo = tableNo;
    };
    MainService.prototype.getTableNo = function () {
        return this.tableNo;
    };
    MainService.prototype.setWaiterName = function (waiterName) {
        this.waiterName = waiterName;
    };
    MainService.prototype.getWaiterName = function () {
        return this.waiterName;
    };
    MainService.prototype.groupArrayOfObjects = function (list, key) {
        return list.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };
    MainService.prototype.loadBeepAudio = function () {
        //this.beepAudio.src = "../assets/kitchenBeep.mp3";
        //this.beepAudio.load();
    };
    MainService.prototype.playBeepAudio = function () {
        //console.log("playBeepAudio");
        //this.beepAudio.play();
    };
    MainService.prototype.loadWaiterBeepAudio = function () {
        //this.beepTableAudio.src = "../assets/readybeep.mp3";
        //this.beepTableAudio.load();
    };
    MainService.prototype.playWaiterBeepAudio = function () {
        //console.log("playWaiterBeepAudio");
        //this.beepTableAudio.play();
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/orders/home/order.component.css":
/*!*************************************************!*\
  !*** ./src/app/orders/home/order.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container{\r\n    display: flex;\r\n    flex-wrap: nowrap;    \r\n}\r\n\r\n\r\n  \r\n  .table-container > div {\r\n    \r\n    margin: 3px;\r\n    text-align: center;\r\n    line-height: 50px;\r\n    font-size: 30px;\r\n  }\r\n\r\n\r\n  \r\n  .line-text-font{\r\n    font-size: 18px;\r\n  }\r\n\r\n\r\n  \r\n  .col-style{\r\n    display: flex; flex-wrap: nowrap;\r\n  }\r\n\r\n "

/***/ }),

/***/ "./src/app/orders/home/order.component.html":
/*!**************************************************!*\
  !*** ./src/app/orders/home/order.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3>Select Table For Ordering:</h3>\n  \n  <span>\n    <button *ngIf=\"MainSer.branchName=='karveroad'\" class=\"btn btn-primary\" [ngClass]=\"{'btn-primary': this.captainNo != 1, 'btn-success' : this.captainNo === 1}\" (click)=\"setCaptainNo(1)\">Cap 1</button>\n  </span>\n  <span>\n    <button *ngIf=\"MainSer.branchName=='karveroad'\" style=\"margin-left:10px\" class=\"btn btn-primary\" [ngClass]=\"{'btn-primary': this.captainNo != 2, 'btn-success' : this.captainNo === 2}\" (click)=\"setCaptainNo(2)\">Cap 2</button>\n  </span>\n  <!-- <span>\n    <button *ngIf=\"MainSer.branchName=='karveroad'\" style=\"margin-left:10px\" class=\"btn btn-primary\" [ngClass]=\"{'btn-primary': this.captainNo != 4, 'btn-success' : this.captainNo === 4}\" (click)=\"setCaptainNo(4)\">Cap 3</button>\n  </span> -->\n  <span>\n    <button *ngIf=\"MainSer.branchName=='karveroad'\" style=\"margin-left:10px\" class=\"btn btn-primary\" [ngClass]=\"{'btn-primary': this.captainNo != 3,  'btn-success' : this.captainNo === 3}\" (click)=\"setCaptainNo(3)\">Orders</button>\n  </span>\n  \n</div>\n<div *ngIf=\"this.MainSer.waiterName\">\n  <div *ngIf=\"this.captainNo == 1 && MainSer.branchName=='Bhukum'\" class=\"col-style\">\n    <div class=\"table-container\">\n      <div>              \n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[0] === 'empty', 'btn-warning' : this.tableStatus[0] === 'preparing', 'btn-success' : this.tableStatus[0] === 'ready' }\" (click)=\"goToOrderDetails(1)\">Table 01</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[1] === 'empty', 'btn-warning' : this.tableStatus[1] === 'preparing', 'btn-success' : this.tableStatus[1] === 'ready' }\" (click)=\"goToOrderDetails(2)\">Table 02</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[2] === 'empty', 'btn-warning' : this.tableStatus[2] === 'preparing', 'btn-success' : this.tableStatus[2] === 'ready' }\" (click)=\"goToOrderDetails(3)\">Table 03</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[3] === 'empty', 'btn-warning' : this.tableStatus[3] === 'preparing', 'btn-success' : this.tableStatus[3] === 'ready' }\" (click)=\"goToOrderDetails(4)\">Table 04</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[4] === 'empty', 'btn-warning' : this.tableStatus[4] === 'preparing', 'btn-success' : this.tableStatus[4] === 'ready' }\" (click)=\"goToOrderDetails(5)\">Table 05</button>\n      </div>\n    </div>\n    <div class=\"table-container\">\n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[5] === 'empty', 'btn-warning' : this.tableStatus[5] === 'preparing', 'btn-success' : this.tableStatus[5] === 'ready' }\" (click)=\"goToOrderDetails(6)\">Table 06</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[6] === 'empty', 'btn-warning' : this.tableStatus[6] === 'preparing', 'btn-success' : this.tableStatus[6] === 'ready' }\" (click)=\"goToOrderDetails(7)\">Table 07</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[7] === 'empty', 'btn-warning' : this.tableStatus[7] === 'preparing', 'btn-success' : this.tableStatus[7] === 'ready' }\" (click)=\"goToOrderDetails(8)\">Table 08</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[8] === 'empty', 'btn-warning' : this.tableStatus[8] === 'preparing', 'btn-success' : this.tableStatus[8] === 'ready' }\" (click)=\"goToOrderDetails(9)\">Table 09</button>\n      </div> \n    </div>                 \n  </div>\n\n  <div *ngIf=\"this.captainNo == 1 && MainSer.branchName=='karveroad'\" class=\"col-style\">\n    <div class=\"table-container\">\n      <div>              \n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[0] === 'empty', 'btn-warning' : this.tableStatus[0] === 'preparing', 'btn-success' : this.tableStatus[0] === 'ready' }\" (click)=\"goToOrderDetails(1)\">{{tableText}} 05</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[1] === 'empty', 'btn-warning' : this.tableStatus[1] === 'preparing', 'btn-success' : this.tableStatus[1] === 'ready' }\" (click)=\"goToOrderDetails(2)\">{{tableText}} 04</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[2] === 'empty', 'btn-warning' : this.tableStatus[2] === 'preparing', 'btn-success' : this.tableStatus[2] === 'ready' }\" (click)=\"goToOrderDetails(3)\">{{tableText}} 03</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[3] === 'empty', 'btn-warning' : this.tableStatus[3] === 'preparing', 'btn-success' : this.tableStatus[3] === 'ready' }\" (click)=\"goToOrderDetails(4)\">{{tableText}} 02</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[4] === 'empty', 'btn-warning' : this.tableStatus[4] === 'preparing', 'btn-success' : this.tableStatus[4] === 'ready' }\" (click)=\"goToOrderDetails(5)\">{{tableText}} 01</button>\n        <br><b class=\"line-text-font\">Line 1</b>\n      </div>                   \n    </div>\n\n    <div class=\"table-container\">\n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[5] === 'empty', 'btn-warning' : this.tableStatus[5] === 'preparing', 'btn-success' : this.tableStatus[5] === 'ready' }\" (click)=\"goToOrderDetails(6)\">{{tableText}} 05</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[6] === 'empty', 'btn-warning' : this.tableStatus[6] === 'preparing', 'btn-success' : this.tableStatus[6] === 'ready' }\" (click)=\"goToOrderDetails(7)\">{{tableText}} 04</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[7] === 'empty', 'btn-warning' : this.tableStatus[7] === 'preparing', 'btn-success' : this.tableStatus[7] === 'ready' }\" (click)=\"goToOrderDetails(8)\">{{tableText}} 03</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[8] === 'empty', 'btn-warning' : this.tableStatus[8] === 'preparing', 'btn-success' : this.tableStatus[8] === 'ready' }\" (click)=\"goToOrderDetails(9)\">{{tableText}} 02</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[9] === 'empty', 'btn-warning' : this.tableStatus[9] === 'preparing', 'btn-success' : this.tableStatus[9] === 'ready' }\" (click)=\"goToOrderDetails(10)\">{{tableText}} 01</button>\n        <br><b class=\"line-text-font\">Line 2</b>\n      </div> \n    </div>\n\n    <div class=\"table-container\">  \n        <div>\n          <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[10] === 'empty', 'btn-warning' : this.tableStatus[10] === 'preparing', 'btn-success' : this.tableStatus[10] === 'ready' }\" (click)=\"goToOrderDetails(11)\">{{tableText}} 05</button>\n          <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[11] === 'empty', 'btn-warning' : this.tableStatus[11] === 'preparing', 'btn-success' : this.tableStatus[11] === 'ready' }\" (click)=\"goToOrderDetails(12)\">{{tableText}} 04</button>\n          <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[12] === 'empty', 'btn-warning' : this.tableStatus[12] === 'preparing', 'btn-success' : this.tableStatus[12] === 'ready' }\" (click)=\"goToOrderDetails(13)\">{{tableText}} 03</button>\n          <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[13] === 'empty', 'btn-warning' : this.tableStatus[13] === 'preparing', 'btn-success' : this.tableStatus[13] === 'ready' }\" (click)=\"goToOrderDetails(14)\">{{tableText}} 02</button>\n          <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[14] === 'empty', 'btn-warning' : this.tableStatus[14] === 'preparing', 'btn-success' : this.tableStatus[14] === 'ready' }\" (click)=\"goToOrderDetails(15)\">{{tableText}} 01</button>\n          <br><b class=\"line-text-font\">Line 3</b>\n        </div>        \n    </div>\n    <div class=\"table-container\">  \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[31] === 'empty', 'btn-warning' : this.tableStatus[31] === 'preparing', 'btn-success' : this.tableStatus[31] === 'ready' }\" (click)=\"goToOrderDetails(32)\">{{tableText}} 06</button>\n        <br><br><br><br><br><b class=\"line-text-font\">Line 3</b>\n      </div>        \n    </div>\n  </div>\n\n  <div *ngIf=\"this.captainNo == 2 && MainSer.branchName=='karveroad'\"  class=\"col-style\">\n    <div class=\"table-container\">    \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[15] === 'empty', 'btn-warning' : this.tableStatus[15] === 'preparing', 'btn-success' : this.tableStatus[15] === 'ready' }\" (click)=\"goToOrderDetails(16)\">{{tableText}}4</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[16] === 'empty', 'btn-warning' : this.tableStatus[16] === 'preparing', 'btn-success' : this.tableStatus[16] === 'ready' }\" (click)=\"goToOrderDetails(17)\">{{tableText}}3</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[17] === 'empty', 'btn-warning' : this.tableStatus[17] === 'preparing', 'btn-success' : this.tableStatus[17] === 'ready' }\" (click)=\"goToOrderDetails(18)\">{{tableText}}2</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[18] === 'empty', 'btn-warning' : this.tableStatus[18] === 'preparing', 'btn-success' : this.tableStatus[18] === 'ready' }\" (click)=\"goToOrderDetails(19)\">{{tableText}}1</button>\n        <br><b class=\"line-text-font\">Line 4</b>\n      </div>        \n    </div> \n    <div class=\"table-container\">   \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[19] === 'empty', 'btn-warning' : this.tableStatus[19] === 'preparing', 'btn-success' : this.tableStatus[19] === 'ready' }\" (click)=\"goToOrderDetails(20)\">{{tableText}}3</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[20] === 'empty', 'btn-warning' : this.tableStatus[20] === 'preparing', 'btn-success' : this.tableStatus[20] === 'ready' }\" (click)=\"goToOrderDetails(21)\">{{tableText}}2</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[21] === 'empty', 'btn-warning' : this.tableStatus[21] === 'preparing', 'btn-success' : this.tableStatus[21] === 'ready' }\" (click)=\"goToOrderDetails(22)\">{{tableText}}1</button>\n        <br><br><b class=\"line-text-font\">Line 5</b>\n      </div>       \n    </div>\n    <div class=\"table-container\">   \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[22] === 'empty', 'btn-warning' : this.tableStatus[22] === 'preparing', 'btn-success' : this.tableStatus[22] === 'ready' }\" (click)=\"goToOrderDetails(23)\">{{tableText}}3</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[23] === 'empty', 'btn-warning' : this.tableStatus[23] === 'preparing', 'btn-success' : this.tableStatus[23] === 'ready' }\" (click)=\"goToOrderDetails(24)\">{{tableText}}2</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[24] === 'empty', 'btn-warning' : this.tableStatus[24] === 'preparing', 'btn-success' : this.tableStatus[24] === 'ready' }\" (click)=\"goToOrderDetails(25)\">{{tableText}}1</button>\n        <br><br><b class=\"line-text-font\">Line 6</b>\n      </div>       \n    </div>\n    <div class=\"table-container\">   \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[25] === 'empty', 'btn-warning' : this.tableStatus[25] === 'preparing', 'btn-success' : this.tableStatus[25] === 'ready' }\" (click)=\"goToOrderDetails(26)\">{{tableText}}3</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[26] === 'empty', 'btn-warning' : this.tableStatus[26] === 'preparing', 'btn-success' : this.tableStatus[26] === 'ready' }\" (click)=\"goToOrderDetails(27)\">{{tableText}}2</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[27] === 'empty', 'btn-warning' : this.tableStatus[27] === 'preparing', 'btn-success' : this.tableStatus[27] === 'ready' }\" (click)=\"goToOrderDetails(28)\">{{tableText}}1</button>\n        <br><br><b class=\"line-text-font\">Line 7</b>\n      </div>       \n    </div>\n\n    <div class=\"table-container\">    \n      <div>\n        <button class=\"btn pt-1\" [ngClass]=\"{'btn-primary': this.tableStatus[28] === 'empty', 'btn-warning' : this.tableStatus[28] === 'preparing', 'btn-success' : this.tableStatus[28] === 'ready' }\" (click)=\"goToOrderDetails(29)\">{{tableText}}3</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[29] === 'empty', 'btn-warning' : this.tableStatus[29] === 'preparing', 'btn-success' : this.tableStatus[29] === 'ready' }\" (click)=\"goToOrderDetails(30)\">{{tableText}}2</button>\n        <br><button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[30] === 'empty', 'btn-warning' : this.tableStatus[30] === 'preparing', 'btn-success' : this.tableStatus[30] === 'ready' }\" (click)=\"goToOrderDetails(31)\">{{tableText}}1</button>\n        <br><br><b class=\"line-text-font\">Line 8</b>\n      </div>        \n    </div> \n\n  </div>\n\n  <div *ngIf=\"this.captainNo == 4 && MainSer.branchName=='karveroad'\"  class=\"col-style\">\n    \n   \n  </div>\n\n  <div *ngIf=\"this.captainNo == 3 && MainSer.branchName=='karveroad'\" class=\"col-style\">\n    <div class=\"form-group row\">\n      <form [formGroup]=\"orderForm\">\n      <div class=\"col-sm-12\">\n        &nbsp;&nbsp;<b>BHAJI</b> &nbsp;&nbsp;&nbsp;&nbsp;      \n        &nbsp;&nbsp;<b>VADI</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        &nbsp;&nbsp;<b>COFFEE</b> &nbsp;&nbsp;\n      </div>\n      <div class=\"col-sm-12 mt-2\">\n        &nbsp;<input id=\"qty_bhaji\" type=\"number\" value=\"1\" min=\"0\" max=\"99\" size=\"2\" formControlName=\"qty_bhaji\"/>&nbsp;  \n        &nbsp;<input type=\"number\" value=\"1\" min=\"0\" max=\"99\" size=\"2\" formControlName=\"qty_vadi\"/>&nbsp;\n        &nbsp;<input type=\"number\" value=\"1\" min=\"0\" max=\"99\" size=\"2\" formControlName=\"qty_coffee\"/>\n      </div>\n      <div class=\"col-sm-12 ml-1 mt-2\">\n        <div>\n          <b>Name:</b> &nbsp;<input  type=\"text\" formControlName=\"cName\" class=\" border\" x-webkit-speech/>\n          \n        </div>\n      </div>\n      <div class=\"col-sm-12\">\n        <div class=\"mt-2  ml-1\">\n          <button (click)=\"resetCounter()\" class=\"btn btn-primary border\"  [disabled]=\"pendingOrdersEditMode\">Reset</button>\n          <button (click)=\"addPendingOrders()\" class=\"btn btn-primary border\"  [disabled]=\"!orderForm.valid || pendingOrdersEditMode\">Add</button>\n          <button (click)=\"updatePendingOrderForm()\" class=\"btn btn-primary border\"  [disabled]=\"!orderForm.valid || this.orderForm.value.qty_bhaji == 0 || this.orderForm.value.qty_vadi == 0 || this.orderForm.value.qty_coffee == 0\" *ngIf=\"pendingOrdersEditMode\">Update</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"resetPendingOrderForm()\" *ngIf=\"pendingOrdersEditMode\">Cancel</button> \n        </div>\n      </div>\n      </form>\n    </div> \n  </div>\n\n  <div *ngIf=\"this.captainNo == 3 && MainSer.branchName=='karveroad'\" class=\"col-style\">\n    <div class=\"col-xs-6 row ml-1\">\n      <table  class=\"table border\" *ngIf=\"pendingOrderData.length\"  data-toggle=\"table\">\n        <tr>\n          <th colspan=\"3\">B - {{getPendingOrderCount('B')}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; V - {{getPendingOrderCount('V')}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  C - {{getPendingOrderCount('C')}}</th>\n         \n        </tr>\n        <tr>\n            <th width=\"130px\">Name</th>\n            <th>Item</th> \n            <th>Action</th>\n        </tr>\n        <tr *ngFor=\"let e of pendingOrderData\">\n          <td><b>{{e.cName}}</b></td>\n          <td><b>{{e.itemName}}- {{e.qty}}</b></td>\n          <td>\n            <button (click)=\"makeOrderReady(e)\" class=\"btn btn-primary\" [disabled]=\"pendingOrdersEditMode\">R</button> &nbsp;\n            <button (click)=\"editPendingOrder(e)\" class=\"btn btn-primary\" [disabled]=\"pendingOrdersEditMode\">E</button>\n          </td>\n        </tr>\n        \n      </table>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/orders/home/order.component.ts":
/*!************************************************!*\
  !*** ./src/app/orders/home/order.component.ts ***!
  \************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderComponent = /** @class */ (function () {
    function OrderComponent(MainSer, router, http, datepipe) {
        this.MainSer = MainSer;
        this.router = router;
        this.http = http;
        this.datepipe = datepipe;
        this.tableText = "T ";
        this.pendingOrderData = [];
        this.pendingOrdersEditMode = false;
        this.orderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            cName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            qty_vadi: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('0', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            qty_coffee: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('0', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            qty_bhaji: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]))
        });
        this.entryDetails = {
            'qty_bhaji': [{ type: 'required', message: 'Field is required' }],
            'qty_vadi': [{ type: 'required', message: 'Field is required' }],
            'qty_coffee': [{ type: 'required', message: 'Field is required' }],
            'cName': [{ type: 'required', message: 'Field is required' }]
        };
        this.unpaidOrders = [];
        this.unpaidOrdersObj = [];
        this.unpaidOrdersObjKeys = [];
        this.tableStatus = [];
        this.captainNo = 0;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('captainNo') != null)
            this.captainNo = JSON.parse(localStorage.getItem('captainNo'));
        else
            this.captainNo = 1;
        if (this.MainSer.waiterName == undefined || this.MainSer.waiterName == '' || this.MainSer.waiterName == ' ') {
            if (localStorage.getItem('waiterName') == null) {
                this.MainSer.waiterName = prompt("Please enter your name");
                localStorage.setItem('waiterName', this.MainSer.waiterName);
            }
            else {
                this.MainSer.waiterName = localStorage.getItem('waiterName');
            }
        }
        if (this.MainSer.waiterName != undefined && this.MainSer.waiterName != '' && this.MainSer.waiterName != ' ') {
            this.getAllUnpaidOrder();
            this.timer = setInterval(function () {
                _this.getAllUnpaidOrder();
            }, 40000);
            this.getAllPendingOrders();
        }
        else {
            alert("Please refresh page & enter name to continue.");
        }
    };
    OrderComponent.prototype.setCaptainNo = function (no) {
        if (this.captainNo != no) {
            this.captainNo = no;
            localStorage.setItem('captainNo', no);
            if (this.captainNo == 3) {
                this.getAllPendingOrders();
            }
        }
    };
    OrderComponent.prototype.resetCounter = function () {
        // this.orderForm.value.qty_bhaji = "0";
        // this.orderForm.value.qty_vadi = "0";
        //this.orderForm.value.qty_coffee = "0";
        this.orderForm.controls['qty_bhaji'].setValue(0);
        this.orderForm.controls['qty_vadi'].setValue(0);
        this.orderForm.controls['qty_coffee'].setValue(0);
        this.orderForm.controls['cName'].setValue('');
        // this.orderForm.se
    };
    OrderComponent.prototype.addPendingOrders = function () {
        var _this = this;
        if (this.orderForm.value.qty_bhaji == 0 &&
            this.orderForm.value.qty_vadi == 0 &&
            this.orderForm.value.qty_coffee == 0) {
            alert("Add Quantity!");
        }
        else {
            var tmptodaysDate = new Date();
            this.todaysDate = this.datepipe.transform(tmptodaysDate, 'yyyy-MM-dd');
            var json = JSON.stringify({ date: this.todaysDate, qty_bhaji: this.orderForm.value.qty_bhaji, qty_vadi: this.orderForm.value.qty_vadi, qty_coffee: this.orderForm.value.qty_coffee, cName: this.orderForm.value.cName, status: 'P' });
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
            header.append("Content-Type", "application/json");
            this.http.post("http://" + this.MainSer.IPAddress + ":3000/api/addPendingOrders", json, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.getAllPendingOrders();
                console.log("success" + res);
                _this.resetPendingOrderForm();
            }, function (error) {
                alert("Please Check Command Promt");
            });
        }
    };
    OrderComponent.prototype.updatePendingOrderForm = function () {
        var _this = this;
        var json = JSON.stringify({ id: this.editPendingOrderData, qty_bhaji: this.orderForm.value.qty_bhaji, qty_vadi: this.orderForm.value.qty_vadi, qty_coffee: this.orderForm.value.qty_coffee, cName: this.orderForm.value.cName });
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        header.append("Content-Type", "application/json");
        this.http.post("http://" + this.MainSer.IPAddress + ":3000/api/updatePendingOrders", json, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            alert("Record Updated!");
            _this.resetPendingOrderForm();
            _this.getAllPendingOrders();
        });
    };
    OrderComponent.prototype.getAllPendingOrders = function () {
        var _this = this;
        var tmptodaysDate = new Date();
        this.todaysDate = this.datepipe.transform(tmptodaysDate, 'yyyy-MM-dd');
        this.http.get("http://" + this.MainSer.IPAddress + ":3000/api/getAllPendingOrders?date=" + this.todaysDate)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.pendingOrderData = resp;
        });
    };
    OrderComponent.prototype.makeOrderReady = function (obj) {
        var _this = this;
        if (window.confirm('Are sure you want to mark READY?')) {
            var json = JSON.stringify({ id: obj.id });
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
            header.append("Content-Type", "application/json");
            this.http.post("http://" + this.MainSer.IPAddress + ":3000/api/markPendingOrderReady", json, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                console.log("success" + res);
                _this.getAllPendingOrders();
            }, function (error) {
                alert("Please Check Command Promt");
            });
        }
    };
    OrderComponent.prototype.editPendingOrder = function (obj) {
        this.pendingOrdersEditMode = true;
        this.orderForm.patchValue({
            qty_bhaji: 0,
            qty_vadi: 0,
            qty_coffee: 0
        });
        this.orderForm.controls['qty_bhaji'].disable();
        this.orderForm.controls['qty_vadi'].disable();
        this.orderForm.controls['qty_coffee'].disable();
        this.orderForm.controls.cName.setValue(obj.cName);
        if (obj.itemName == 'B') {
            this.orderForm.controls['qty_bhaji'].enable();
            this.orderForm.controls.qty_bhaji.setValue(obj.qty);
        }
        else if (obj.itemName == 'V') {
            this.orderForm.controls['qty_vadi'].enable();
            this.orderForm.controls.qty_vadi.setValue(obj.qty);
        }
        else if (obj.itemName == 'C') {
            this.orderForm.controls['qty_coffee'].enable();
            this.orderForm.controls.qty_coffee.setValue(obj.qty);
        }
        this.editPendingOrderData = obj.id;
    };
    OrderComponent.prototype.getPendingOrderCount = function (char) {
        var tmpObj = [];
        tmpObj = this.pendingOrderData.filter(function (obj) { return obj.itemName === char; });
        if (tmpObj.length) {
            var prices = tmpObj.map(function (product) { return product.qty; });
            var total = prices.reduce(function (acc, curr) { return acc + curr; });
            return total;
        }
        else {
            return 0;
        }
    };
    OrderComponent.prototype.resetPendingOrderForm = function () {
        this.pendingOrdersEditMode = false;
        this.orderForm.controls['qty_bhaji'].enable();
        this.orderForm.controls['qty_vadi'].enable();
        this.orderForm.controls['qty_coffee'].enable();
        this.orderForm.reset();
        this.orderForm.patchValue({
            qty_bhaji: 1,
            qty_vadi: 0,
            qty_coffee: 0
        });
    };
    OrderComponent.prototype.getAllUnpaidOrder = function () {
        var _this = this;
        if (this.captainNo != 3) {
            this.http.get("http://" + this.MainSer.IPAddress + ":3000/api/getAllUnpaidOrders")
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) {
                _this.unpaidOrders = resp;
                _this.unpaidOrdersObj = _this.MainSer.groupArrayOfObjects(_this.unpaidOrders, "tableno");
                _this.unpaidOrdersObjKeys = Object.keys(_this.unpaidOrdersObj);
                //console.log(this.unpaidOrdersObj[1]);
                _this.setTableFoodStatus();
                // console.log("Food Status"+this.unpaidOrdersObj[1].find(x => x.foodstatus === 'preparing'))
                var tmpTableStatus = _this.tableStatus.filter(function (status) {
                    return status == 'ready';
                });
                //console.log("this.readyStatusCount--"+this.MainSer.readyStatusCount+" tmpTableStatus--"+tmpTableStatus.length)
                if (_this.MainSer.readyStatusCount < tmpTableStatus.length) {
                    _this.MainSer.readyStatusCount = tmpTableStatus.length;
                    _this.MainSer.playWaiterBeepAudio();
                }
            });
        }
    };
    OrderComponent.prototype.setTableFoodStatus = function () {
        for (var i = 0; i < this.MainSer.totalTables; i++) {
            if (this.unpaidOrdersObj[i + 1] == undefined) {
                this.tableStatus[i] = "empty";
            }
            else {
                if (this.unpaidOrdersObj[i + 1].find(function (x) { return x.foodstatus === 'preparing'; })) {
                    this.tableStatus[i] = "preparing";
                }
                else {
                    this.tableStatus[i] = "ready";
                }
            }
        }
    };
    OrderComponent.prototype.goToOrderDetails = function (tableNo) {
        //console.log(tableNo);
        this.MainSer.setTableNo(tableNo);
        //  
        this.router.navigate(['orderDetails'], {});
    };
    OrderComponent.prototype.ngOnDestroy = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/orders/home/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/orders/home/order.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/orders/kitchen-orders/kitchen-orders.component.css":
/*!********************************************************************!*\
  !*** ./src/app/orders/kitchen-orders/kitchen-orders.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table\r\n{\r\nfont-size: 20px;\r\n} \r\nbutton, input, optgroup, select, textarea {\r\n    /* margin: 0; */\r\n     font-family: Arial, Helvetica, sans-serif!important; \r\n    /* font-size: inherit; */\r\n     line-height: inherit; \r\n    font-size: 13.3333px !important;\r\n    font-family: Arial !important;\r\n} \r\n*, ::after, ::before{\r\n    box-sizing: content-box !important;\r\n} \r\n.billDiv tr td, .billDiv tr th{\r\n    padding: 0px 10px 0px 9px;\r\n  } \r\ntable tr:nth-child(1) th{\r\n    background: #f1f1f1;\r\n} \r\n.billDiv div\r\n{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    width: 448px;\r\n    font-size: 20px;\r\n} \r\n.billDiv div:nth(1)\r\n{\r\n    text-align: left;\r\n} \r\n.billDiv th:nth(1)\r\n{\r\n    width:30px;\r\n} \r\n.billDiv td:nth(2){\r\n    TEXT-align: left;\r\n} \r\n.billDiv th\r\n{\r\n    text-align: left;\r\n} \r\n.billDiv\r\n{\r\n    margin-top: 25px;\r\n    padding-top: 5px;\r\n    width: 565px;\r\n    font-size: 12px;\r\n    border: thin dotted #000;\r\n\r\n} \r\n.row{\r\n    margin-right: 0px;\r\n} \r\n@media print {\r\n  body *{\r\n    visibility: hidden !important;\r\n   \r\n    }\r\n   \r\n  }"

/***/ }),

/***/ "./src/app/orders/kitchen-orders/kitchen-orders.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/orders/kitchen-orders/kitchen-orders.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n <div class=\"header\">\n  <div class=\"row\">\n    <div class=\"col-sm-7\">\n\n      <h3><b>Bhadait Misal</b></h3>\n      &nbsp;<input type=\"date\" [(ngModel)]=\"selectedDate\" [max]=\"todaySysDate\"/>&nbsp;\n      <button class=\"btn btn-success\" (click)=\"getOrdersByDate()\" [disabled]=\"!selectedDate\">Order History</button>\n    </div>\n    <div class=\"col-sm-4 ml-4 mt-1\" *ngIf=\"false\">\n      \n      <input [disabled]=\"managerMode || ownerMode || bhukumShopMode\" type=\"password\" [(ngModel)]=\"userPassword\" placeholder=\"Enter Password\">\n      &nbsp;<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userPassword && loginBtnText=='Sign In'\" (click)=\"setAdminMode()\">{{loginBtnText}}</button>\n      &nbsp;<button class=\"btn btn-success\" (click)=\"router.navigate(['customerBills'], {});\">Customer Bills</button> \n<!--        &nbsp;<button class=\"btn btn-success\" (click)=\"router.navigate(['billsMenu'], {});\">Bill Menu</button> \n --> \n    </div>\n  </div>\n</div>\n  <div class=\"pageMargin\">\n  <div *ngIf=\"!tableBill.length\">\n      <h3>No New Order!<br><br>Focus on Cleaning Kitchen Area!!</h3>\n  </div>     \n    \n  <div id=\"billDiv\"  *ngIf=\"bill.length || tableBill.length\" >\n    <!-- <div><img src=\"./logo.png\" width=\"200px\" height=\"100px\" align=\"center\"/></div> -->\n        <!-- <div *ngIf=\"branchName=='karveroad'\">BHADAIT MISAL<BR>Lane No.14, Prabhat Road, Near Seed<BR>Infotech, Pune-411004</div>  \n        <div  *ngIf=\"branchName=='Bhukum'\">BHADAIT MISAL<BR>Kanta Smruti, Opp. Muktai Lawns<BR>Bhukum, Paud Road, Pune-412108</div>  -->\n        <!-- <div>BILL NO:{{billno}} DATE: {{latest_date}} TIME: {{latest_time}}</div> -->\n\n        <div *ngFor=\"let key of billTablesObjectKeys; let i = index;trackBy: trackChatMessage\">\n          <br><table cellpadding=5 border=\"1\">\n            <!-- <tr>\n                <th colspan=\"5\" style='text-align:center'></th>\n                <th></th>\n            </tr> -->\n              <tr>\n                <!-- <th align=\"left\" colspan=\"2\" >Bill No: {{billno}}<br>Name: {{cname | titlecase}}</th> -->\n                <th  colspan=\"2\"><!-- Table No: {{billTablesObject[key][0].tableno}}<br> -->\n                  Name: {{billTablesObject[key][0].cname}}<br>Mo: {{billTablesObject[key][0].mobileno}}</th>\n                <th  colspan=\"2\" style='text-align:right;'>Date: {{billTablesObject[key][0].date | date:'dd/MM/yyyy'}}<br>Time: {{billTablesObject[key][0].time}}</th>\n              </tr> \n            <tr>\n                <th>Sr</th>\n                <th style=\"width: 126px\">Item Name</th>\n                <th>Qty</th>\n                <th align=\"center\" >Note</th>\n                <!-- <th >Price</th>\n                <th >Amount</th> \n                <th >Action</th>-->\n            </tr>\n      \n            <tr *ngFor=\"let b of billTablesObject[key]; let j = index;trackBy: trackChatMessage\">\n              <td>{{j+1}}</td>\n              <td align=\"left\">{{this.items[b.itemno-1].itemname}}</td>\n              <td align=\"center\">{{b.qty}}</td>\n              <td   [innerHTML]=\"b.note\"></td>\n             <!--  <td align=\"right\">{{this.items[b.itemno-1].price}}</td>\n              <td align=\"right\">{{getTotalBillAmount(b.qty * this.items[b.itemno-1].price)}}</td> -->\n            </tr> \n           <!--  <tr *ngFor=\"let b of bill; let i = index;trackBy: trackChatMessage\">\n                <td>{{i+1}}</td>\n                <td>{{b.itemname}}</td>\n                <td align=\"right\">{{b.qty}}</td>\n                <td align=\"right\">{{b.price}}</td>\n                <td align=\"right\">{{b.amount}}</td> \n                <td><button (click)=\"removeMenu(i)\">Remove</button></td>\n            </tr>      -->\n            <tr  *ngIf=\"!getAllOrders\">\n<!--               <td colspan=\"2\" align=\"left\" style='font-weight:bold;' [innerHTML]=\"billTablesObject[key][billTablesObject[key].length-1].note\"></td>\n -->              <!-- <td colspan=\"1\"  align=\"right\" style='font-weight:bold;'>Rs.{{totalPrice}}</td> -->\n \n              <td colspan=\"4\" align=\"right\"><button (click)=\"markOrderReady(billTablesObject[key])\">Order Ready</button></td>\n            </tr>\n            <tr style='font-size:18px' \n            *ngIf=\"spicy || noTarri || tarriSeperate || noOnion || noPohe || packSeperate || noMatki || noPav || noBundi || exOnion || exMatki || mediumRassa || spicyRassa || nonSpicyRassa || exBundi || spNote\">\n              <td style='font-weight:bold;'>Note:</td>\n              <td colspan=\"4\" style=\"width: 300px;font-weight:bold;\">\n                <span *ngIf=\"mediumRassa\">&nbsp; <b>*</b> {{mediumRassa}} M</span>\n                <span *ngIf=\"spicyRassa\">&nbsp; <b>*</b> {{spicyRassa}} S</span>\n                <span *ngIf=\"nonSpicyRassa\">&nbsp; <b>*</b> {{nonSpicyRassa}} NS</span>\n                <span *ngIf=\"spicy\">&nbsp; <b>*</b> Spicy</span>\n                <span *ngIf=\"noTarri\">&nbsp; <b>*</b> No Tarri</span>\n                <span *ngIf=\"tarriSeperate\">&nbsp; <b>*</b> Tarri Seperate</span>\n                <span *ngIf=\"noOnion\">&nbsp; <b>*</b> No Onion</span>\n                <span *ngIf=\"noPohe\">&nbsp; <b>*</b> No Pohe</span>\n                <span *ngIf=\"noMatki\">&nbsp; <b>*</b> No Matki</span>\n                <span *ngIf=\"noPav\">&nbsp; <b>*</b> No Pav</span>\n                <span *ngIf=\"noBundi\">&nbsp; <b>*</b> No Bundi</span>\n                <span *ngIf=\"exOnion\">&nbsp; <b>*</b> Ex Onion</span>\n                <span *ngIf=\"exMatki\">&nbsp; <b>*</b> Ex Matki</span>\n                <span *ngIf=\"packSeperate\">&nbsp; <b>*</b> Pack Seperate</span>\n                <span *ngIf=\"exBundi\">&nbsp; <b>*</b> Ex Bundi</span>\n                <span *ngIf=\"spNote\">&nbsp; <b>*</b> {{spNote}}</span>\n              </td>\n              <td></td>\n            </tr>\n          <!--  <tr>\n                <td colspan=\"5\" style='text-align:center;font-weight:bold;'>**THANK YOU**<BR>**VISIT AGAIN**</td>\n                  <td></td>\n            </tr>   -->    \n          </table>\n        </div>\n        \n\n    <div *ngIf=\"emp\">\n        <ul>\n          <li *ngFor=\"let e of emp\">{{e.itemno}} {{e.itemname}} {{e.price}}</li>\n        </ul>\n      </div>\n  </div>\n\n  <div style=\"margin-top: 10px;font-weight: bold;\">\n    <span *ngIf=\"bill.length\">\n    <tr>\n      <td>\n        <table class=\"\">\n        <tr>\n          <td>CN: <input type=\"text\" style=\"width: 50px;\" [(ngModel)]=\"cname\"></td>\n\n          <td><b>Instruction:</b></td>\n          <td>Medium <input id=\"mediumRassa\" type=\"number\" style=\"width: 50px;\" [(ngModel)]=\"mediumRassa\" min=\"0\"></td>\n          <td>&nbsp;&nbsp;Spicy <input style=\"width: 50px;\" type=\"number\" [(ngModel)]=\"spicyRassa\"></td>\n          <td>Non Spicy <input type=\"number\" style=\"width: 50px;\" [(ngModel)]=\"nonSpicyRassa\"></td>\n\n        </tr>\n        \n        <tr>\n          <td><input type=\"checkbox\" value=\"Spicy\" [disabled]=\"noTarri\" [(ngModel)]=\"spicy\"/> 1. Spicy&nbsp;&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Non Spicy\" [disabled]=\"spicy || tarriSeperate\" [(ngModel)]=\"noTarri\"/> 2. No Tarri&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Tarri Seperate\" [disabled]=\"noTarri\" [(ngModel)]=\"tarriSeperate\"/> 3. Tarri Sep.&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"No Onion\" [disabled]=\"exOnion\" [(ngModel)]=\"noOnion\"/> 4. No Onion&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"No Matki\" [disabled]=\"exMatki\" [(ngModel)]=\"noMatki\"/> 5. No Matki&nbsp;&nbsp;</td>\n        </tr>\n        <tr>\n          <td><input type=\"checkbox\" value=\"No Pav\" [disabled]=\"\" [(ngModel)]=\"noPav\"/> 6. No Pav&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"No Bundi\" [disabled]=\"exBundi\" [(ngModel)]=\"noBundi\"/> 7. No Bundi&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Ex Onion\" [disabled]=\"noOnion\" [(ngModel)]=\"exOnion\"/> 8. Ex Onion&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Ex Matki\" [disabled]=\"noMatki\" [(ngModel)]=\"exMatki\"/> 9. Ex Matki&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Pack Seperate\" [(ngModel)]=\"packSeperate\"/> 0. Pack Seperate&nbsp;&nbsp;</td>\n        </tr>\n        <tr>\n          <td><input type=\"checkbox\" value=\"No Pohe\" [disabled]=\"\" [(ngModel)]=\"noPohe\"/> 11. No Pohe&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Ex Bundi\" [disabled]=\"noBundi\" [(ngModel)]=\"exBundi\"/> 11. Ex Bundi&nbsp;&nbsp;</td>\n          <td colspan=\"3\"><input type=\"text\" [(ngModel)]=\"spNote\" placeholder=\"Special Note\"/></td>\n        </tr>\n      </table>\n       <br>\n      </td>\n    </tr>\n       \n      \n  </span>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/orders/kitchen-orders/kitchen-orders.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/orders/kitchen-orders/kitchen-orders.component.ts ***!
  \*******************************************************************/
/*! exports provided: KitchenOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenOrdersComponent", function() { return KitchenOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var KitchenOrdersComponent = /** @class */ (function () {
    function KitchenOrdersComponent(http, datepipe, MainSer, router) {
        var _this = this;
        this.http = http;
        this.datepipe = datepipe;
        this.MainSer = MainSer;
        this.router = router;
        this.bill = [];
        this.tableBill = [];
        this.menuIndex = "0";
        this.menuQty = 1;
        this.totalPrice = 0;
        this.todayDate = new Date();
        this.spicy = false;
        this.noTarri = false;
        this.tarriSeperate = false;
        this.noOnion = false;
        this.noPohe = false;
        this.noMatki = false;
        this.noPav = false;
        this.noBundi = false;
        this.exOnion = false;
        this.exMatki = false;
        this.packSeperate = false;
        this.exBundi = false;
        this.spNote = "";
        this.mediumRassa = 0;
        this.spicyRassa = 0;
        this.nonSpicyRassa = 0;
        this.cname = "";
        this.loginBtnText = "Sign In";
        this.managerMode = false;
        this.ownerMode = false;
        this.bhukumShopMode = false;
        this.userPassword = "";
        this.cNote = "";
        this.billTablesObject = [];
        this.billTablesObjectKeys = [];
        this.totKitchenOrder = 0;
        this.disabledReadyBtn = false;
        this.getAllOrders = false;
        this.MainSer.customerOrderMode = true;
        this.MainSer.getItemsData().subscribe(function (resp) { return _this.items = resp; });
        //this.getItemsData()
        this.getBillNo();
    }
    KitchenOrdersComponent.prototype.getCNote = function () {
        this.cNote = "";
        if (this.mediumRassa)
            this.cNote += "<b>*</b>" + this.mediumRassa + " M";
        if (this.spicyRassa)
            this.cNote += "&nbsp; <b>*</b>" + this.spicyRassa + " S";
        if (this.nonSpicyRassa)
            this.cNote += "&nbsp; <b>*</b>" + this.nonSpicyRassa + " NS";
        if (this.spicy)
            this.cNote += "&nbsp; <b>*</b> Spicy";
        if (this.noTarri)
            this.cNote += "&nbsp; <b>*</b> No Tarri";
        if (this.tarriSeperate)
            this.cNote += "&nbsp; <b>*</b> Tarri Seperate";
        if (this.noOnion)
            this.cNote += "&nbsp; <b>*</b> No Onion";
        if (this.noPohe)
            this.cNote += "&nbsp; <b>*</b> No Pohe";
        if (this.noMatki)
            this.cNote += "&nbsp; <b>*</b> No Matki";
        if (this.noPav)
            this.cNote += "&nbsp; <b>*</b> No Pav";
        if (this.noBundi)
            this.cNote += "&nbsp; <b>*</b> No Bundi";
        if (this.exOnion)
            this.cNote += "&nbsp; <b>*</b> Ex Onion";
        if (this.exMatki)
            this.cNote += "&nbsp; <b>*</b> Ex Matki";
        if (this.packSeperate)
            this.cNote += "&nbsp; <b>*</b> Pack Seperate";
        if (this.exBundi)
            this.cNote += "&nbsp; <b>*</b> Ex Bundi";
        if (this.spNote)
            this.cNote += "&nbsp; <b>*</b> " + this.spNote;
    };
    KitchenOrdersComponent.prototype.markOrderReady = function (obj) {
        var _this = this;
        if (window.confirm('Are sure you want to marke it ready?')) {
            if (!this.disabledReadyBtn) {
                console.log("updateVendorData-- " + obj);
                this.disabledReadyBtn = true;
                var json = JSON.stringify({ billno: obj[0].billno });
                var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
                header.append("Content-Type", "application/json");
                this.http.post(this.MainSer.IPAddress + "/api/markOrderReady", json, { headers: header })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (resp) {
                    _this.totKitchenOrder = _this.totKitchenOrder - 1;
                    //alert("Record Updated!");
                    _this.disabledReadyBtn = false;
                    _this.getAllKitchenOrders();
                });
            }
        }
    };
    KitchenOrdersComponent.prototype.resetBillsVaribale = function (flag) {
        this.spicy = flag;
        this.noTarri = flag;
        this.tarriSeperate = flag;
        this.noOnion = flag;
        this.noPohe = flag;
        this.noMatki = flag;
        this.noPav = flag;
        this.noBundi = flag;
        this.exOnion = flag;
        this.exMatki = flag;
        this.packSeperate = flag;
        this.exBundi = flag;
        this.spNote = "";
        this.mediumRassa = 0;
        this.spicyRassa = 0;
        this.nonSpicyRassa = 0;
        this.cname = "";
    };
    KitchenOrdersComponent.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    KitchenOrdersComponent.prototype.getItemsData = function () {
        var _this = this;
        if (localStorage.getItem('menu') == null) {
            this.http.get(this.MainSer.IPAddress + "/api/GetItemsData")
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) { return _this.items = resp; });
        }
        else {
            this.items = JSON.parse(localStorage.getItem('menu'));
        }
    };
    KitchenOrdersComponent.prototype.getBillNo = function () {
        var _this = this;
        if (this.tableBill.length) {
            this.billno = this.tableBill.billno;
        }
        else {
            this.todayDate = new Date();
            this.latest_date = this.datepipe.transform(this.todayDate, 'MM-dd-yyyy');
            this.latest_time = this.datepipe.transform(this.todayDate, 'HH:MM:SS');
            this.http.get(this.MainSer.IPAddress + "/api/billno?date=" + this.latest_date)
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) {
                _this.billno = resp;
                //this.setBillNo()
                console.log(_this.billno);
                if (_this.billno != "")
                    _this.billno = _this.billno[0].billno;
                else
                    _this.billno = 1;
            });
        }
    };
    KitchenOrdersComponent.prototype.noteCheckboxClick = function (chkBoxName) {
        if (chkBoxName == "spicy") {
            if (this.spicy == true)
                this.spicy = false;
            else
                this.spicy = true;
        }
        if (chkBoxName == "noTarri") {
            if (this.noTarri == true)
                this.noTarri = false;
            else
                this.noTarri = true;
        }
        if (chkBoxName == "tarriSeperate") {
            if (this.tarriSeperate == true)
                this.tarriSeperate = false;
            else
                this.tarriSeperate = true;
        }
        if (chkBoxName == "noOnion") {
            if (this.noOnion == true)
                this.noOnion = false;
            else
                this.noOnion = true;
        }
        if (chkBoxName == "noPohe") {
            if (this.noPohe == true)
                this.noPohe = false;
            else
                this.noPohe = true;
        }
        if (chkBoxName == "noMatki") {
            if (this.noMatki == true)
                this.noMatki = false;
            else
                this.noMatki = true;
        }
        if (chkBoxName == "noPav") {
            if (this.noPav == true)
                this.noPav = false;
            else
                this.noPav = true;
        }
        if (chkBoxName == "noBundi") {
            if (this.noBundi == true)
                this.noBundi = false;
            else
                this.noBundi = true;
        }
        if (chkBoxName == "exOnion") {
            if (this.exOnion == true)
                this.exOnion = false;
            else
                this.exOnion = true;
        }
        if (chkBoxName == "exMatki") {
            if (this.exMatki == true)
                this.exMatki = false;
            else
                this.exMatki = true;
        }
        if (chkBoxName == "packSeperate") {
            if (this.packSeperate == true)
                this.packSeperate = false;
            else
                this.packSeperate = true;
        }
        if (chkBoxName == "exBundi") {
            if (this.exBundi == true)
                this.exBundi = false;
            else
                this.exBundi = true;
        }
    };
    KitchenOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
        this.selectedDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
        this.getAllKitchenOrders();
        this.timer = setInterval(function () {
            if (!_this.getAllOrders)
                _this.getAllKitchenOrders();
        }, 15000);
    };
    KitchenOrdersComponent.prototype.getAllKitchenOrders = function () {
        var _this = this;
        this.http.get(this.MainSer.IPAddress + "/api/getAllKitchenOrders")
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.tableBill = resp;
            console.log(_this.tableBill);
            _this.splitTableBillObject();
        });
    };
    KitchenOrdersComponent.prototype.getOrdersByDate = function () {
        var _this = this;
        this.getAllOrders = true;
        // let tmptodaysDate = new Date();
        var todaysDate = this.datepipe.transform(this.selectedDate, 'MM-dd-yyyy');
        //Getting table no 500 ie customer parcel
        this.http.get(this.MainSer.IPAddress + "/api/getOrdersByDate?date=" + todaysDate)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.tableBill = resp;
            console.log(_this.tableBill);
            _this.splitTableBillObject();
        });
    };
    KitchenOrdersComponent.prototype.splitTableBillObject = function () {
        this.billTablesObject = this.MainSer.groupArrayOfObjects(this.tableBill, "billno");
        this.billTablesObjectKeys = Object.keys(this.billTablesObject);
        // console.log(this.totKitchenOrder+" -- 00billTablesObject-- "+this.billTablesObjectKeys.length);
        if (this.totKitchenOrder < this.billTablesObjectKeys.length) {
            this.totKitchenOrder = this.billTablesObjectKeys.length;
            this.MainSer.playBeepAudio();
            //console.log("audio..")
        }
    };
    KitchenOrdersComponent.prototype.ngOnDestroy = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    KitchenOrdersComponent.prototype.getTotalBillAmount = function (amt) {
        return amt;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], KitchenOrdersComponent.prototype, "latest_date", void 0);
    KitchenOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kitchen-orders',
            template: __webpack_require__(/*! ./kitchen-orders.component.html */ "./src/app/orders/kitchen-orders/kitchen-orders.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
            styles: [__webpack_require__(/*! ./kitchen-orders.component.css */ "./src/app/orders/kitchen-orders/kitchen-orders.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], KitchenOrdersComponent);
    return KitchenOrdersComponent;
}());



/***/ }),

/***/ "./src/app/orders/order-billing-select-table/order-billing-select-table.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/orders/order-billing-select-table/order-billing-select-table.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    \r\n}\r\n\r\n\r\n  \r\n  .table-container > div {\r\n    \r\n    margin: 10px;\r\n    text-align: center;\r\n    line-height: 20px;\r\n    font-size: 30px;\r\n  }"

/***/ }),

/***/ "./src/app/orders/order-billing-select-table/order-billing-select-table.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/orders/order-billing-select-table/order-billing-select-table.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3>Select Table For Billing:</h3>\n \n  \n</div>\n<div>    \n    \n    <div class=\"table-container\" *ngIf=\"this.tableStatus?.length\">\n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[0] === 'empty', 'btn-warning' : this.tableStatus[0] === 'preparing', 'btn-success' : this.tableStatus[0] === 'ready' }\" (click)=\"goToOrderDetails(1)\">Table 01</button>\n      </div>\n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[1] === 'empty', 'btn-warning' : this.tableStatus[1] === 'preparing', 'btn-success' : this.tableStatus[1] === 'ready' }\" (click)=\"goToOrderDetails(2)\">Table 02</button>\n      </div>\n        \n      <div>\n          <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[2] === 'empty', 'btn-warning' : this.tableStatus[2] === 'preparing', 'btn-success' : this.tableStatus[2] === 'ready' }\" (click)=\"goToOrderDetails(3)\">Table 03</button>\n      </div> \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[3] === 'empty', 'btn-warning' : this.tableStatus[3] === 'preparing', 'btn-success' : this.tableStatus[3] === 'ready' }\" (click)=\"goToOrderDetails(4)\">Table 04</button>\n      </div>\n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[4] === 'empty', 'btn-warning' : this.tableStatus[4] === 'preparing', 'btn-success' : this.tableStatus[4] === 'ready' }\" (click)=\"goToOrderDetails(5)\">Table 05</button>\n      </div>               \n    </div>\n\n    <div class=\"table-container\">      \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[5] === 'empty', 'btn-warning' : this.tableStatus[5] === 'preparing', 'btn-success' : this.tableStatus[5] === 'ready' }\" (click)=\"goToOrderDetails(6)\">Table 06</button>\n      </div>  \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[6] === 'empty', 'btn-warning' : this.tableStatus[6] === 'preparing', 'btn-success' : this.tableStatus[6] === 'ready' }\" (click)=\"goToOrderDetails(7)\">Table 07</button>\n      </div>\n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[7] === 'empty', 'btn-warning' : this.tableStatus[7] === 'preparing', 'btn-success' : this.tableStatus[7] === 'ready' }\" (click)=\"goToOrderDetails(8)\">Table 08</button>\n      </div>\n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[8] === 'empty', 'btn-warning' : this.tableStatus[8] === 'preparing', 'btn-success' : this.tableStatus[8] === 'ready' }\" (click)=\"goToOrderDetails(9)\">Table 09</button>\n      </div>\n      <div>\n        <button *ngIf=\"MainSer.branchName=='karveroad'\" class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[9] === 'empty', 'btn-warning' : this.tableStatus[9] === 'preparing', 'btn-success' : this.tableStatus[9] === 'ready' }\" (click)=\"goToOrderDetails(10)\">Table 10</button>\n      </div>\n    </div>\n\n    <div class=\"table-container\" *ngIf=\"MainSer.branchName=='karveroad'\">        \n         \n        <div>\n          <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[10] === 'empty', 'btn-warning' : this.tableStatus[10] === 'preparing', 'btn-success' : this.tableStatus[10] === 'ready' }\" (click)=\"goToOrderDetails(11)\">Table 11</button>\n        </div> \n        <div>\n          <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[11] === 'empty', 'btn-warning' : this.tableStatus[11] === 'preparing', 'btn-success' : this.tableStatus[11] === 'ready' }\" (click)=\"goToOrderDetails(12)\">Table 12</button>\n        </div> \n        <div>\n          <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[12] === 'empty', 'btn-warning' : this.tableStatus[12] === 'preparing', 'btn-success' : this.tableStatus[12] === 'ready' }\" (click)=\"goToOrderDetails(13)\">Table 13</button>\n        </div> \n        <div>\n          <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[13] === 'empty', 'btn-warning' : this.tableStatus[13] === 'preparing', 'btn-success' : this.tableStatus[13] === 'ready' }\" (click)=\"goToOrderDetails(14)\">Table 14</button>\n        </div> \n        <div>\n          <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[14] === 'empty', 'btn-warning' : this.tableStatus[14] === 'preparing', 'btn-success' : this.tableStatus[14] === 'ready' }\" (click)=\"goToOrderDetails(15)\">Table 15</button>\n        </div>       \n    </div> \n    <div class=\"table-container\"  *ngIf=\"MainSer.branchName=='karveroad'\" >       \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[15] === 'empty', 'btn-warning' : this.tableStatus[15] === 'preparing', 'btn-success' : this.tableStatus[15] === 'ready' }\" (click)=\"goToOrderDetails(16)\">Table 16</button>\n      </div>\n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[16] === 'empty', 'btn-warning' : this.tableStatus[16] === 'preparing', 'btn-success' : this.tableStatus[16] === 'ready' }\" (click)=\"goToOrderDetails(17)\">Table 17</button>\n      </div> \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[17] === 'empty', 'btn-warning' : this.tableStatus[17] === 'preparing', 'btn-success' : this.tableStatus[17] === 'ready' }\" (click)=\"goToOrderDetails(18)\">Table 18</button>\n      </div> \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[18] === 'empty', 'btn-warning' : this.tableStatus[18] === 'preparing', 'btn-success' : this.tableStatus[18] === 'ready' }\" (click)=\"goToOrderDetails(19)\">Table 19</button>\n      </div> \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[19] === 'empty', 'btn-warning' : this.tableStatus[19] === 'preparing', 'btn-success' : this.tableStatus[19] === 'ready' }\" (click)=\"goToOrderDetails(20)\">Table 20</button>\n      </div>       \n    </div>\n    <div class=\"table-container\"  *ngIf=\"MainSer.branchName=='karveroad'\" >    \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[20] === 'empty', 'btn-warning' : this.tableStatus[20] === 'preparing', 'btn-success' : this.tableStatus[20] === 'ready' }\" (click)=\"goToOrderDetails(21)\">Table 21</button>\n      </div> \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[21] === 'empty', 'btn-warning' : this.tableStatus[21] === 'preparing', 'btn-success' : this.tableStatus[21] === 'ready' }\" (click)=\"goToOrderDetails(22)\">Table 22</button>\n      </div> \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[22] === 'empty', 'btn-warning' : this.tableStatus[22] === 'preparing', 'btn-success' : this.tableStatus[22] === 'ready' }\" (click)=\"goToOrderDetails(23)\">Table 23</button>\n      </div> \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[23] === 'empty', 'btn-warning' : this.tableStatus[23] === 'preparing', 'btn-success' : this.tableStatus[23] === 'ready' }\" (click)=\"goToOrderDetails(24)\">Table 24</button>\n      </div>\n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[24] === 'empty', 'btn-warning' : this.tableStatus[24] === 'preparing', 'btn-success' : this.tableStatus[24] === 'ready' }\" (click)=\"goToOrderDetails(25)\">Table 25</button>\n      </div>      \n    </div>\n    <div class=\"table-container\"  *ngIf=\"MainSer.branchName=='karveroad'\" >       \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[25] === 'empty', 'btn-warning' : this.tableStatus[25] === 'preparing', 'btn-success' : this.tableStatus[25] === 'ready' }\" (click)=\"goToOrderDetails(26)\">Table 26</button>\n      </div>\n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[26] === 'empty', 'btn-warning' : this.tableStatus[26] === 'preparing', 'btn-success' : this.tableStatus[26] === 'ready' }\" (click)=\"goToOrderDetails(27)\">Table 27</button>\n      </div>\n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[27] === 'empty', 'btn-warning' : this.tableStatus[27] === 'preparing', 'btn-success' : this.tableStatus[27] === 'ready' }\" (click)=\"goToOrderDetails(28)\">Table 28</button>\n      </div>\n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[28] === 'empty', 'btn-warning' : this.tableStatus[28] === 'preparing', 'btn-success' : this.tableStatus[28] === 'ready' }\" (click)=\"goToOrderDetails(29)\">Table 29</button>\n      </div>\n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[29] === 'empty', 'btn-warning' : this.tableStatus[29] === 'preparing', 'btn-success' : this.tableStatus[29] === 'ready' }\" (click)=\"goToOrderDetails(30)\">Table 30</button>\n      </div>      \n    </div>\n    <div class=\"table-container\"  *ngIf=\"MainSer.branchName=='karveroad'\" >       \n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[30] === 'empty', 'btn-warning' : this.tableStatus[30] === 'preparing', 'btn-success' : this.tableStatus[30] === 'ready' }\" (click)=\"goToOrderDetails(31)\">Table 31</button>\n      </div>\n      <div>\n        <button class=\"btn\" [ngClass]=\"{'btn-primary': this.tableStatus[31] === 'empty', 'btn-warning' : this.tableStatus[31] === 'preparing', 'btn-success' : this.tableStatus[31] === 'ready' }\" (click)=\"goToOrderDetails(32)\">Table 32</button>\n      </div>    \n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/orders/order-billing-select-table/order-billing-select-table.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/orders/order-billing-select-table/order-billing-select-table.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OrderBillingSelectTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBillingSelectTableComponent", function() { return OrderBillingSelectTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderBillingSelectTableComponent = /** @class */ (function () {
    function OrderBillingSelectTableComponent(MainSer, router, http) {
        this.MainSer = MainSer;
        this.router = router;
        this.http = http;
        this.waitername = "Rohit";
        this.unpaidOrders = [];
        this.unpaidOrdersObj = [];
        this.unpaidOrdersObjKeys = [];
        this.tableStatus = [];
    }
    OrderBillingSelectTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.waitername = prompt("Please enter your name");
        console.log(this.waitername);
        this.getAllUnpaidOrder();
        this.timer = setInterval(function () {
            _this.getAllUnpaidOrder();
        }, 40000);
    };
    OrderBillingSelectTableComponent.prototype.getAllUnpaidOrder = function () {
        var _this = this;
        this.http.get("http://" + this.MainSer.IPAddress + ":3000/api/getAllUnpaidOrders")
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.unpaidOrders = resp;
            _this.unpaidOrdersObj = _this.MainSer.groupArrayOfObjects(_this.unpaidOrders, "tableno");
            _this.unpaidOrdersObjKeys = Object.keys(_this.unpaidOrdersObj);
            //console.log(this.unpaidOrdersObj[1]);
            _this.setTableFoodStatus();
            // console.log("Food Status"+this.unpaidOrdersObj[1].find(x => x.foodstatus === 'preparing'))
        });
    };
    OrderBillingSelectTableComponent.prototype.setTableFoodStatus = function () {
        for (var i = 0; i < this.MainSer.totalTables; i++) {
            if (this.unpaidOrdersObj[i + 1] == undefined) {
                this.tableStatus[i] = "empty";
            }
            else {
                if (this.unpaidOrdersObj[i + 1].find(function (x) { return x.foodstatus === 'preparing'; })) {
                    this.tableStatus[i] = "preparing";
                }
                else {
                    this.tableStatus[i] = "ready";
                }
            }
        }
    };
    OrderBillingSelectTableComponent.prototype.goToOrderDetails = function (tableNo) {
        console.log(tableNo);
        this.MainSer.setTableNo(tableNo);
        this.MainSer.currentTableFoodStatus = this.tableStatus[tableNo - 1];
        this.router.navigate(['tableBilling'], {});
    };
    OrderBillingSelectTableComponent.prototype.ngOnDestroy = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    OrderBillingSelectTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-billing-select-table',
            template: __webpack_require__(/*! ./order-billing-select-table.component.html */ "./src/app/orders/order-billing-select-table/order-billing-select-table.component.html"),
            styles: [__webpack_require__(/*! ./order-billing-select-table.component.css */ "./src/app/orders/order-billing-select-table/order-billing-select-table.component.css")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], OrderBillingSelectTableComponent);
    return OrderBillingSelectTableComponent;
}());



/***/ }),

/***/ "./src/app/orders/order-billing/order-billing.component.css":
/*!******************************************************************!*\
  !*** ./src/app/orders/order-billing/order-billing.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table\r\n{\r\nfont-size: 20px;\r\n} \r\nbutton, input, optgroup, select, textarea {\r\n    /* margin: 0; */\r\n     font-family: Arial, Helvetica, sans-serif!important; \r\n    /* font-size: inherit; */\r\n     line-height: inherit; \r\n    font-size: 13.3333px !important;\r\n    font-family: Arial !important;\r\n} \r\n*, ::after, ::before{\r\n    box-sizing: content-box !important;\r\n} \r\n.billDiv tr td, .billDiv tr th{\r\n    padding: 0px 10px 0px 9px;\r\n  } \r\n.billDiv div\r\n{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    width: 448px;\r\n    font-size: 20px;\r\n} \r\n.billDiv div:nth(1)\r\n{\r\n    text-align: left;\r\n} \r\n.billDiv th:nth(1)\r\n{\r\n    width:30px;\r\n} \r\n.billDiv td:nth(2){\r\n    TEXT-align: left;\r\n} \r\n.billDiv th\r\n{\r\n    text-align: left;\r\n} \r\n.billDiv\r\n{\r\n    margin-top: 25px;\r\n    padding-top: 5px;\r\n    width: 565px;\r\n    font-size: 12px;\r\n\r\n} \r\n.row{\r\n    margin-right: 0px;\r\n} \r\n@media print {\r\n  body *{\r\n    visibility: hidden !important;\r\n   \r\n    }\r\n    body {margin-top:-0.8cm !important;}\r\n    .billDiv\r\n    {\r\n      /* margin-left: -10px!important;;\r\n       margin-left: -170px!important; Rohit*/\r\n       margin-left: -94px;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/orders/order-billing/order-billing.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/orders/order-billing/order-billing.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"row\">\n    <div class=\"col-sm-7\">\n      <button class=\"mb-2\" (click)=\"router.navigate(['selectBillingTable'], {});\" style=\"height: 25px;width: 50px;\">Back</button>\n\n     &nbsp;&nbsp; <h3 class=\"\"  style=\"display:inline\">Billing For Table No : {{MainSer.getTableNo()}}</h3>\n    </div>\n    <div class=\"col-sm-4 ml-4 mt-1\" *ngIf=\"false\">\n      \n      <input [disabled]=\"managerMode || ownerMode || bhukumShopMode\" type=\"password\" [(ngModel)]=\"userPassword\" placeholder=\"Enter Password\">\n      &nbsp;<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userPassword && loginBtnText=='Sign In'\" (click)=\"setAdminMode()\">{{loginBtnText}}</button>\n      &nbsp;<button class=\"btn btn-success\" (click)=\"router.navigate(['customerBills'], {});\">Customer Bills</button> \n<!--        &nbsp;<button class=\"btn btn-success\" (click)=\"router.navigate(['billsMenu'], {});\">Bill Menu</button> \n --> \n    </div>\n  </div>\n</div>\n  <div class=\"containerDiv\">\n   <div *ngIf=\"!tableBill.length\">\n      <h2>No Bill Pending for Table No - {{MainSer.getTableNo()}}</h2>\n   </div> \n  <div id=\"billDiv\" class=\"billDiv\" *ngIf=\"tableBill.length\" style=\"margin-top:51px\">\n    <h3>Food Status - {{this.MainSer.currentTableFoodStatus | titlecase}}</h3>\n    <hr>\n    <!-- <div><img src=\"./logo.png\" width=\"200px\" height=\"100px\" align=\"center\"/></div> -->\n         <div *ngIf=\"branchName=='karveroad'\">BHADAIT MISAL<BR>Lane No.14, Prabhat Road, Near Seed<BR>Infotech, Pune-411004</div>  \n        <div  *ngIf=\"branchName=='Bhukum'\">BHADAIT MISAL<BR>Kanta Smruti, Opp. Muktai Lawns<BR>Bhukum, Paud Road, Pune-412108</div> \n<!--         <div>BILL NO:{{billno}} DATE: {{latest_date}} TIME: {{latest_time}}</div>\n -->    <table cellpadding=3 border=\"1\">\n        <!-- <tr>\n            <th colspan=\"5\" style='text-align:center'></th>\n            <th></th>\n        </tr> -->\n        <tr *ngIf=\"tableBill[tableBill.length-1]\">\n          <th align=\"left\" colspan=\"2\" >Bill No: {{billno}}<br>Name: {{ tableBill[0].cname | titlecase}}<br>Table No: {{tableBill[0].tableno}}</th>\n          <th  colspan=\"3\" style='text-align:right;'>Date: {{tableBill[tableBill.length-1].date | date:'dd/MM/yyyy'}}<br>Time: {{tableBill[tableBill.length-1].time}}</th>\n          <th></th>\n        </tr> \n      <tr>\n          <th>Sr.No</th>\n          <th style=\"width: 126px\" >Item Name</th>\n          <th >Qty</th>\n          <th >Price</th>\n          <th >Amount</th>\n          <th >Action</th>\n      </tr>\n\n      <tr *ngFor=\"let b of tableBill; let i = index;trackBy: trackChatMessage\">\n        <td>{{i+1}}</td>\n        <td>{{this.items[b.itemno-1].itemname}}</td>\n        <td align=\"right\">{{b.qty}}</td>\n        <td align=\"right\">{{this.items[b.itemno-1].price}}</td>\n        <td align=\"right\">{{getTotalBillAmount(b.qty * this.items[b.itemno-1].price)}}</td>\n        <td></td>\n    </tr>\n    \n      <tr>\n        <td colspan=\"4\" align=\"left\" style='font-weight:bold;'>TOTAL</td>\n        <td colspan=\"1\"  align=\"right\" style='font-weight:bold;'>Rs.{{totalPrice}}</td>\n        <td><button (click)=\"printBill()\" [disabled]=\"this.MainSer.currentTableFoodStatus != 'ready'\">Print</button></td>\n      </tr>\n      <tr style='font-size:18px' \n       *ngIf=\"spicy || noTarri || tarriSeperate || noOnion || noPohe || packSeperate || noMatki || noPav || noBundi || exOnion || exMatki || mediumRassa || spicyRassa || nonSpicyRassa || exBundi || spNote\">\n       <td ></td>\n       <td style='font-weight:bold;'>Note:</td>\n        <td colspan=\"4\" style=\"width: 300px;font-weight:bold;\">\n          <span *ngIf=\"mediumRassa\">&nbsp; <b>*</b> {{mediumRassa}} M</span>\n          <span *ngIf=\"spicyRassa\">&nbsp; <b>*</b> {{spicyRassa}} S</span>\n          <span *ngIf=\"nonSpicyRassa\">&nbsp; <b>*</b> {{nonSpicyRassa}} NS</span>\n          <span *ngIf=\"spicy\">&nbsp; <b>*</b> Spicy</span>\n          <span *ngIf=\"noTarri\">&nbsp; <b>*</b> No Tarri</span>\n          <span *ngIf=\"tarriSeperate\">&nbsp; <b>*</b> Tarri Seperate</span>\n          <span *ngIf=\"noOnion\">&nbsp; <b>*</b> No Onion</span>\n          <span *ngIf=\"noPohe\">&nbsp; <b>*</b> No Pohe</span>\n          <span *ngIf=\"noMatki\">&nbsp; <b>*</b> No Matki</span>\n          <span *ngIf=\"noPav\">&nbsp; <b>*</b> No Pav</span>\n          <span *ngIf=\"noBundi\">&nbsp; <b>*</b> No Bundi</span>\n          <span *ngIf=\"exOnion\">&nbsp; <b>*</b> Ex Onion</span>\n          <span *ngIf=\"exMatki\">&nbsp; <b>*</b> Ex Matki</span>\n          <span *ngIf=\"packSeperate\">&nbsp; <b>*</b> Pack Seperate</span>\n          <span *ngIf=\"exBundi\">&nbsp; <b>*</b> Ex Bundi</span>\n          <span *ngIf=\"spNote\">&nbsp; <b>*</b> {{spNote}}</span>\n        </td>\n      </tr>\n      <tr>\n          <td colspan=\"5\" style='text-align:center;font-weight:bold;'>**THANK YOU**<BR>**VISIT AGAIN**</td>\n            <td></td>\n      </tr>    \n    </table>\n\n    <div *ngIf=\"emp\">\n        <ul>\n          <li *ngFor=\"let e of emp\">{{e.itemno}} {{e.itemname}} {{e.price}}</li>\n        </ul>\n      </div>\n  </div>\n\n  <div style=\"margin-top: 10px;font-weight: bold;\">\n    <span *ngIf=\"bill.length\">\n    <tr>\n      <td>\n        <table class=\"\">\n        <tr>\n          <td  colspan=\"3\">CN: <input type=\"text\" style=\"width: 200px;\" [(ngModel)]=\"cname\" placeholder=\"Customer Name\"></td>\n        </tr>\n        <tr>    \n          <td>M <input id=\"mediumRassa\" type=\"number\" style=\"width: 25px;\" [(ngModel)]=\"mediumRassa\" min=\"0\"></td>\n          <td>S <input style=\"width: 25px;\" type=\"number\" [(ngModel)]=\"spicyRassa\"></td>\n          <td>NS <input type=\"number\" style=\"width: 25px;\" [(ngModel)]=\"nonSpicyRassa\"></td>\n\n        </tr>\n        \n        <tr>\n          <td><input type=\"checkbox\" value=\"Spicy\" [disabled]=\"noTarri\" [(ngModel)]=\"spicy\"/> Spicy&nbsp;&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Non Spicy\" [disabled]=\"spicy || tarriSeperate\" [(ngModel)]=\"noTarri\"/> No Tarri&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Tarri Seperate\" [disabled]=\"noTarri\" [(ngModel)]=\"tarriSeperate\"/> Tarri Sep.&nbsp;&nbsp;</td>\n        </tr>\n            <tr> \n          <td><input type=\"checkbox\" value=\"No Onion\" [disabled]=\"exOnion\" [(ngModel)]=\"noOnion\"/> No Oni&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"No Matki\" [disabled]=\"exMatki\" [(ngModel)]=\"noMatki\"/> No Mat&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"No Pav\" [disabled]=\"\" [(ngModel)]=\"noPav\"/> No Pav&nbsp;&nbsp;</td>\n    \n        </tr>\n        <tr>\n          <td><input type=\"checkbox\" value=\"No Bundi\" [disabled]=\"exBundi\" [(ngModel)]=\"noBundi\"/> No Bun&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Ex Onion\" [disabled]=\"noOnion\" [(ngModel)]=\"exOnion\"/> Ex Oni&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Ex Matki\" [disabled]=\"noMatki\" [(ngModel)]=\"exMatki\"/> Ex Mat&nbsp;&nbsp;</td>\n        </tr>\n        <tr>\n          <td><input type=\"checkbox\" value=\"Pack Seperate\" [(ngModel)]=\"packSeperate\"/> Pack Sep&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"No Pohe\" [disabled]=\"\" [(ngModel)]=\"noPohe\"/> No Pohe&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Ex Bundi\" [disabled]=\"noBundi\" [(ngModel)]=\"exBundi\"/> Ex Bun&nbsp;&nbsp;</td>\n        </tr>\n        <tr>\n          <td colspan=\"3\"><input type=\"text\" style=\"width: 200px;\" [(ngModel)]=\"spNote\" placeholder=\"Special Note\"/></td>\n\n        </tr>\n      </table>\n       <br>\n      </td>\n    </tr>\n       \n      \n  </span>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/orders/order-billing/order-billing.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/orders/order-billing/order-billing.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrderBillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBillingComponent", function() { return OrderBillingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderBillingComponent = /** @class */ (function () {
    function OrderBillingComponent(http, datepipe, MainSer, router) {
        var _this = this;
        this.http = http;
        this.datepipe = datepipe;
        this.MainSer = MainSer;
        this.router = router;
        this.bill = [];
        this.tableBill = [];
        this.menuIndex = "0";
        this.menuQty = 1;
        this.totalPrice = 0;
        this.todayDate = new Date();
        this.spicy = false;
        this.noTarri = false;
        this.tarriSeperate = false;
        this.noOnion = false;
        this.noPohe = false;
        this.noMatki = false;
        this.noPav = false;
        this.noBundi = false;
        this.exOnion = false;
        this.exMatki = false;
        this.packSeperate = false;
        this.exBundi = false;
        this.spNote = "";
        this.mediumRassa = 0;
        this.spicyRassa = 0;
        this.nonSpicyRassa = 0;
        this.cname = "";
        this.loginBtnText = "Sign In";
        this.managerMode = false;
        this.ownerMode = false;
        this.bhukumShopMode = false;
        this.userPassword = "";
        this.cNote = "";
        //.subscribe( this.items = items);
        this.branchName = this.MainSer.getbranchName();
        this.MainSer.getItemsData().subscribe(function (resp) {
            _this.items = resp;
            _this.getBillForTable();
        });
        //this.getItemsData()
        // console.log(this.items)
        this.subscription1 = this.MainSer.mangerMode.subscribe(function (value) {
            console.log("Subscription got", value);
            _this.managerMode = value;
            if (_this.managerMode)
                _this.loginBtnText = "Sign Out";
        });
        this.subscription2 = this.MainSer.ownerMode.subscribe(function (value) {
            console.log("Subscription got", value);
            _this.ownerMode = value;
            if (_this.ownerMode)
                _this.loginBtnText = "Sign Out";
        });
        this.subscription3 = this.MainSer.bhukumShopMode.subscribe(function (value) {
            console.log("Subscription got", value);
            _this.bhukumShopMode = value;
            if (_this.bhukumShopMode)
                _this.loginBtnText = "Sign Out";
        });
    }
    OrderBillingComponent.prototype.addMenu = function () {
        if (this.MainSer.getTableNo() == 0) {
            alert("Please Select Table");
        }
        else {
            if (this.menuIndex != "" && this.menuQty > 0) {
                this.todayDate = new Date();
                this.latest_date = this.datepipe.transform(this.todayDate, 'MM-dd-yyyy');
                this.latest_time = this.datepipe.transform(this.todayDate, 'shortTime');
                this.amt = parseInt(this.items[this.menuIndex].price) * (this.menuQty);
                this.bill.push({ "itemno": this.menuIndex, "itemname": this.items[this.menuIndex].itemname, "price": this.items[this.menuIndex].price, "qty": this.menuQty, "amount": this.amt });
                this.totalPrice += this.amt;
                this.menuIndex = "0";
                document.getElementById("menu").focus();
                this.menuQty = 1;
            }
        }
    };
    OrderBillingComponent.prototype.removeMenu = function (index) {
        console.log(index);
        // this.amt=parseInt(this.bill[index].qty)*parseInt(this.bill[index].price)
        this.totalPrice -= parseInt(this.bill[index].qty) * parseInt(this.bill[index].price);
        this.bill.splice(index, 1);
        document.getElementById("menu").focus();
        if (this.bill.length == 0) {
            this.resetBillsVaribale(false);
        }
    };
    OrderBillingComponent.prototype.getCNote = function () {
        this.cNote = "";
        if (this.mediumRassa)
            this.cNote += "<b>*</b>" + this.mediumRassa + " M";
        if (this.spicyRassa)
            this.cNote += "&nbsp; <b>*</b>" + this.spicyRassa + " S";
        if (this.nonSpicyRassa)
            this.cNote += "&nbsp; <b>*</b>" + this.nonSpicyRassa + " NS";
        if (this.spicy)
            this.cNote += "&nbsp; <b>*</b> Spicy";
        if (this.noTarri)
            this.cNote += "&nbsp; <b>*</b> No Tarri";
        if (this.tarriSeperate)
            this.cNote += "&nbsp; <b>*</b> Tarri Seperate";
        if (this.noOnion)
            this.cNote += "&nbsp; <b>*</b> No Onion";
        if (this.noPohe)
            this.cNote += "&nbsp; <b>*</b> No Pohe";
        if (this.noMatki)
            this.cNote += "&nbsp; <b>*</b> No Matki";
        if (this.noPav)
            this.cNote += "&nbsp; <b>*</b> No Pav";
        if (this.noBundi)
            this.cNote += "&nbsp; <b>*</b> No Bundi";
        if (this.exOnion)
            this.cNote += "&nbsp; <b>*</b> Ex Onion";
        if (this.exMatki)
            this.cNote += "&nbsp; <b>*</b> Ex Matki";
        if (this.packSeperate)
            this.cNote += "&nbsp; <b>*</b> Pack Seperate";
        if (this.exBundi)
            this.cNote += "&nbsp; <b>*</b> Ex Bundi";
        if (this.spNote)
            this.cNote += "&nbsp; <b>*</b> " + this.spNote;
    };
    OrderBillingComponent.prototype.updateBill = function () {
    };
    OrderBillingComponent.prototype.updateBillStatus = function () {
        var _this = this;
        // this.getCNote();
        // for(let i=0;i<this.bill.length;i++)
        //{
        var json = JSON.stringify({ billno: this.tableBill[0].billno });
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        header.append("Content-Type", "application/json");
        this.http.post("http://" + this.MainSer.IPAddress + ":3000/api/paidTableBill", json, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log("success" + res);
            _this.printBillSuccess();
        }, function (error) {
            alert("Please Check Command Promt");
        });
        // }
    };
    OrderBillingComponent.prototype.printBillSuccess = function () {
        //this.billno++; 
        window.print();
        //this.bill=[]//.splice(0,this.bill.length);
        this.totalPrice = 0;
        this.copyMessage(this.cname);
        this.resetBillsVaribale(false);
        this.getBillForTable();
        // document.getElementById("menu").focus();
    };
    OrderBillingComponent.prototype.printBill = function () {
        if (this.tableBill.length) {
            this.updateBillStatus();
        }
    };
    OrderBillingComponent.prototype.resetBillsVaribale = function (flag) {
        this.spicy = flag;
        this.noTarri = flag;
        this.tarriSeperate = flag;
        this.noOnion = flag;
        this.noPohe = flag;
        this.noMatki = flag;
        this.noPav = flag;
        this.noBundi = flag;
        this.exOnion = flag;
        this.exMatki = flag;
        this.packSeperate = flag;
        this.exBundi = flag;
        this.spNote = "";
        this.mediumRassa = 0;
        this.spicyRassa = 0;
        this.nonSpicyRassa = 0;
        this.cname = "";
    };
    OrderBillingComponent.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    OrderBillingComponent.prototype.getItemsData = function () {
        var _this = this;
        if (localStorage.getItem('menu') == null) {
            this.http.get("http://" + this.MainSer.IPAddress + ":3000/api/GetItemsData")
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) { return _this.items = resp; });
        }
        else {
            this.items = JSON.parse(localStorage.getItem('menu'));
        }
    };
    OrderBillingComponent.prototype.getBillNo = function () {
        console.log("this.tableBill.length " + this.tableBill.length);
        if (this.tableBill.length) {
            this.billno = this.tableBill[0].billno;
        }
        else {
            /* this.http.get("http://"+this.MainSer.IPAddress+":3000/api/billnobymax")
              .map(res=>res.json())
              .subscribe(resp=>{
                //this.setBillNo()
                if(resp!="")
                  this.billno=resp[0]["MAX(billno)"]+1;
                else
                  this.billno=1;
          
                  console.log("billno-- "+this.billno)
          
              }); */
        }
    };
    OrderBillingComponent.prototype.noteCheckboxClick = function (chkBoxName) {
        if (chkBoxName == "spicy") {
            if (this.spicy == true)
                this.spicy = false;
            else
                this.spicy = true;
        }
        if (chkBoxName == "noTarri") {
            if (this.noTarri == true)
                this.noTarri = false;
            else
                this.noTarri = true;
        }
        if (chkBoxName == "tarriSeperate") {
            if (this.tarriSeperate == true)
                this.tarriSeperate = false;
            else
                this.tarriSeperate = true;
        }
        if (chkBoxName == "noOnion") {
            if (this.noOnion == true)
                this.noOnion = false;
            else
                this.noOnion = true;
        }
        if (chkBoxName == "noPohe") {
            if (this.noPohe == true)
                this.noPohe = false;
            else
                this.noPohe = true;
        }
        if (chkBoxName == "noMatki") {
            if (this.noMatki == true)
                this.noMatki = false;
            else
                this.noMatki = true;
        }
        if (chkBoxName == "noPav") {
            if (this.noPav == true)
                this.noPav = false;
            else
                this.noPav = true;
        }
        if (chkBoxName == "noBundi") {
            if (this.noBundi == true)
                this.noBundi = false;
            else
                this.noBundi = true;
        }
        if (chkBoxName == "exOnion") {
            if (this.exOnion == true)
                this.exOnion = false;
            else
                this.exOnion = true;
        }
        if (chkBoxName == "exMatki") {
            if (this.exMatki == true)
                this.exMatki = false;
            else
                this.exMatki = true;
        }
        if (chkBoxName == "packSeperate") {
            if (this.packSeperate == true)
                this.packSeperate = false;
            else
                this.packSeperate = true;
        }
        if (chkBoxName == "exBundi") {
            if (this.exBundi == true)
                this.exBundi = false;
            else
                this.exBundi = true;
        }
    };
    OrderBillingComponent.prototype.ngOnInit = function () {
        //this.MainSer.setLoginMode("manager",false);
        //this.MainSer.setLoginMode("owner",false);
    };
    OrderBillingComponent.prototype.getBillForTable = function () {
        var _this = this;
        this.http.get("http://" + this.MainSer.IPAddress + ":3000/api/getBillForTable?tableNo=" + this.MainSer.getTableNo())
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.tableBill = resp;
            _this.getBillNo();
            _this.setBillTotal();
        });
    };
    OrderBillingComponent.prototype.setBillTotal = function () {
        var _this = this;
        this.tableBill.forEach(function (item, i) {
            _this.totalPrice += _this.items[item.itemno - 1].price * item.qty;
        });
    };
    OrderBillingComponent.prototype.ngOnDestroy = function () {
        if (this.subscription1)
            this.subscription1.unsubscribe();
        if (this.subscription2)
            this.subscription2.unsubscribe();
        if (this.subscription3)
            this.subscription3.unsubscribe();
    };
    OrderBillingComponent.prototype.keyEvent = function (event) {
        console.log(event.keyCode);
        if (event.keyCode == 107) {
            this.printBill();
        }
        //32)
        if (event.keyCode == 192) {
            document.getElementById("menu").focus();
            this.menuIndex = "0";
            this.menuQty = 1;
        }
        if (event.keyCode == 109) {
            document.getElementById("mediumRassa").focus();
        }
        if (event.keyCode == 49 && !this.noTarri)
            this.noteCheckboxClick("spicy");
        if (event.keyCode == 50 && !this.spicy)
            this.noteCheckboxClick("noTarri");
        if (event.keyCode == 51 && !this.noTarri)
            this.noteCheckboxClick("tarriSeperate");
        if (event.keyCode == 52 && !this.exOnion)
            this.noteCheckboxClick("noOnion");
        if (event.keyCode == 189)
            this.noteCheckboxClick("noPohe");
        if (event.keyCode == 53 && !this.exMatki)
            this.noteCheckboxClick("noMatki");
        if (event.keyCode == 54)
            this.noteCheckboxClick("noPav");
        if (event.keyCode == 55 && !this.exBundi)
            this.noteCheckboxClick("noBundi");
        if (event.keyCode == 187 && !this.noBundi)
            this.noteCheckboxClick("exBundi");
        if (event.keyCode == 56 && !this.noOnion)
            this.noteCheckboxClick("exOnion");
        if (event.keyCode == 57 && !this.noMatki)
            this.noteCheckboxClick("exMatki");
        if (event.keyCode == 48)
            this.noteCheckboxClick("packSeperate");
    };
    OrderBillingComponent.prototype.onKeyup = function (event) {
        if (event.keyCode === 13) {
            //console.log(event);
            this.addMenu();
        }
    };
    OrderBillingComponent.prototype.onKeypress = function (event) {
        var pattern = /[0-9\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    OrderBillingComponent.prototype.getFinalBillAmount = function () {
        return this.totalPrice;
    };
    OrderBillingComponent.prototype.getTotalBillAmount = function (amt) {
        return amt;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrderBillingComponent.prototype, "latest_date", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], OrderBillingComponent.prototype, "keyEvent", null);
    OrderBillingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-billing',
            template: __webpack_require__(/*! ./order-billing.component.html */ "./src/app/orders/order-billing/order-billing.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
            styles: [__webpack_require__(/*! ./order-billing.component.css */ "./src/app/orders/order-billing/order-billing.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], OrderBillingComponent);
    return OrderBillingComponent;
}());



/***/ }),

/***/ "./src/app/orders/order-details/order-details.component.css":
/*!******************************************************************!*\
  !*** ./src/app/orders/order-details/order-details.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table\r\n{\r\nfont-size: 20px;\r\n} \r\nbutton, input, optgroup, select, textarea {\r\n    /* margin: 0; */\r\n     font-family: Arial, Helvetica, sans-serif!important; \r\n    /* font-size: inherit; */\r\n     line-height: inherit; \r\n    font-size: 13.3333px !important;\r\n    font-family: Arial !important;\r\n} \r\n*, ::after, ::before{\r\n    box-sizing: content-box !important;\r\n} \r\n.billDiv tr td, .billDiv tr th{\r\n    padding: 0px 10px 0px 9px;\r\n  } \r\n.billDiv div\r\n{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    width: 448px;\r\n    font-size: 20px;\r\n} \r\n.billDiv div:nth(1)\r\n{\r\n    text-align: left;\r\n} \r\n.billDiv th:nth(1)\r\n{\r\n    width:30px;\r\n} \r\n.billDiv td:nth(2){\r\n    TEXT-align: left;\r\n} \r\n.billDiv th\r\n{\r\n    text-align: left;\r\n} \r\n.billDiv\r\n{\r\n    margin-top: 25px;\r\n    padding-top: 5px;\r\n    width: 565px;\r\n    font-size: 12px;\r\n    border: thin dotted #000;\r\n\r\n} \r\n.row{\r\n    margin-right: 0px;\r\n} \r\n@media print {\r\n  body *{\r\n    visibility: hidden !important;\r\n   \r\n    }\r\n   \r\n  }"

/***/ }),

/***/ "./src/app/orders/order-details/order-details.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/orders/order-details/order-details.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n <div class=\"header\">\n  <div class=\"row\">\n    <div class=\"col-sm-7\">\n      <button (click)=\"router.navigate(['selectTable'], {});\" style=\"height: 25px;width: 50px;\">Back</button>\n\n     &nbsp;&nbsp; <b>11Order For Table No : {{MainSer.getTableNo()}}</b>\n    </div>\n    <div class=\"col-sm-4 ml-4 mt-1\" *ngIf=\"false\">\n      \n      <input [disabled]=\"managerMode || ownerMode || bhukumShopMode\" type=\"password\" [(ngModel)]=\"userPassword\" placeholder=\"Enter Password\">\n      &nbsp;<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userPassword && loginBtnText=='Sign In'\" (click)=\"setAdminMode()\">{{loginBtnText}}</button>\n      &nbsp;<button class=\"btn btn-success\" (click)=\"router.navigate(['customerBills'], {});\">Customer Bills</button> \n<!--        &nbsp;<button class=\"btn btn-success\" (click)=\"router.navigate(['billsMenu'], {});\">Bill Menu</button> \n --> \n    </div>\n  </div>\n</div>\n  <div class=\"pageMargin\" >\n    <!-- <form [formGroup]=\"billForm\" (ngSubmit)=\"onSubmit()\">\n        <div *ngFor=\"let validation of menuListDetails.menuQty\">\n            <div  *ngIf=\"billForm.get('menuQty').hasError(validation.type) && billForm.get('menuQty').dirty || billForm.get('menuQty').touched\">\n             {{validation.message}}\n            </div>\n        </div> \n          <div *ngFor=\"let validation of menuListDetails.itemList\">\n              <div  *ngIf=\"billForm.get('itemList').hasError(validation.type) && billForm.get('itemList').dirty || billForm.get('itemList').touched\">\n               {{validation.message}}\n              </div>\n          </div> \n          <select  formControlName=\"itemList\">\n              <option value=\"\" disabled>Select</option>\n              <option value=\"{{num}}\" *ngFor=\"let i of items; let num = index\">{{num+1}} {{i.itemname}}</option>\n            \n            </select>\n            <input type=\"number\" formControlName=\"menuQty\"/>\n            <button type=\"submit\">Submit</button>\n      </form> -->\n\n\n Menu Name:\n <select  [(ngModel)]=\"menuIndex\" tabindex=\"0\" id=\"menu\">\n    <option value=\"\">0 Select Menu</option>\n    <option value=\"{{num}}\" *ngFor=\"let i of items; let num = index\">{{num+1}} {{i.itemname}}</option>\n  <!--  <option value=\"1\">2 Dahi Misal</option>\n    <option value=\"2\">3 Vada Pav</option> -->\n  </select> <BR> <BR>\n  Quantity:\n  <input type=\"number\" [(ngModel)]=\"menuQty\" min=\"1\" max=\"99\" size=\"2\" (keyup)=\"onKeyup($event)\" (keypress)=\"onKeypress($event)\"/>\n  &nbsp;&nbsp;&nbsp;  \n  <button (click)=\"minusQty()\">Minus -</button>\n  &nbsp;<button (click)=\"plusQty()\">Plus +</button>\n  &nbsp;<button (click)=\"addMenu()\" [disabled]=\"billEditMode\">Add</button> \n\n  <BR> <BR>\n\n  <div id=\"billDiv\" class=\"\" *ngIf=\"this.tableBill?.length || this.bill?.length\" >\n    <!-- <div><img src=\"./logo.png\" width=\"200px\" height=\"100px\" align=\"center\"/></div> -->\n        <!-- <div *ngIf=\"branchName=='karveroad'\">BHADAIT MISAL<BR>Lane No.14, Prabhat Road, Near Seed<BR>Infotech, Pune-411004</div>  \n        <div  *ngIf=\"branchName=='Bhukum'\">BHADAIT MISAL<BR>Kanta Smruti, Opp. Muktai Lawns<BR>Bhukum, Paud Road, Pune-412108</div>  -->\n        <!-- <div>BILL NO:{{billno}} DATE: {{latest_date}} TIME: {{latest_time}}</div> -->\n    <table cellpadding=3 border=\"1\" *ngIf=\"this.tableBill?.length || this.bill?.length\">\n        <!-- <tr>\n            <th colspan=\"5\" style='text-align:center'></th>\n            <th></th>\n        </tr> -->\n        <tr *ngIf=\"tableBill[tableBill.length-1]\">\n          <th align=\"left\" colspan=\"2\" >Bill No: {{billno}}<br>Name: {{cname | titlecase}}</th>\n          <th  colspan=\"4\" style='text-align:right;'>Date: {{tableBill[tableBill.length-1].date | date:'dd/MM/yyyy'}}<br>Time: {{tableBill[tableBill.length-1].time}}</th>\n          <th><button (click)=\"billPaid()\" [disabled]=\"bill.length\">PAID</button></th>\n\n        </tr> \n      <tr>\n          <th>Sr</th>\n          <th style=\"width: 126px\" >Item Name</th>\n          <th style=\"width: 10px\">Qt</th>\n          <th style=\"width: 10px;text-align: center;\">&#8377;</th>\n          <th style=\"width: 10px\">Am</th>\n          <th >Note</th>\n          <th style=\"font-size: 12px;\">Action</th>\n      </tr>\n      <ng-container *ngIf=\"this.tableBill?.length\">\n      <tr *ngFor=\"let b of tableBill; let i = index;trackBy: trackChatMessage\">\n        <td>{{i+1}}</td>\n        <td>{{this.items[b.itemno-1].itemname}}</td>\n        <td align=\"center\">{{b.qty}}</td>\n        <td align=\"right\">{{this.items[b.itemno-1].price}}</td>\n        <td align=\"center\">{{getTotalBillAmount(b.qty * this.items[b.itemno-1].price)}}</td>\n        <td style=\"width: 100px;font-size: 10px;\" [innerHTML]=\"b.note+'- '+b.waitername\">\n        </td>\n        <td></td>\n    </tr>\n    </ng-container>\n    <ng-container *ngIf=\"this.bill?.length && !billEditMode\">\n      <tr *ngFor=\"let b of bill; let i = index;trackBy: trackChatMessage\">\n           <td>{{i+1}}</td>\n           <td>{{b.itemname}}</td>\n           <td align=\"center\" >{{b.qty}}</td>\n           <td>{{b.price}}</td>\n           <td align=\"center\">{{b.amount}}</td>\n           <td style=\"width: 100px;font-size: 10px;\" [innerHTML]=\"b.note\"></td>\n\n           <td align=\"center\"><button (click)=\"removeMenu(i)\">RM</button></td>\n      </tr> \n    </ng-container><br>\n    <ng-container *ngIf=\"billEditMode && this.bill?.length\"> <!-- For edit Mode -->\n      \n        <tr *ngFor=\"let b of bill; let i = index;trackBy: trackChatMessage\">\n          <td>{{i+1}}</td>\n          <td>{{this.items[b.itemno-1].itemname}}</td>\n          <td align=\"center\" >{{b.qty}}</td>\n          <td>{{this.items[b.itemno-1].price}}</td>\n          <td align=\"center\">{{getTotalBillAmount(b.qty * this.items[b.itemno-1].price)}}</td>\n          <td style=\"width: 100px;font-size: 10px;\" [innerHTML]=\"b.note\"></td>\n\n          <td align=\"center\"><button (click)=\"removeMenu(i)\">RM</button></td>\n        </tr> \n      \n    </ng-container><br>\n      <tr>\n        <td>\n          <button (click)=\"editBill()\" [disabled]=\"bill.length\" *ngIf=\"!billEditMode\">Edit</button>\n          <button (click)=\"cancelEditBill()\" *ngIf=\"billEditMode\">Back</button>\n        </td>\n        <td colspan=\"3\" align=\"center\" style='font-weight:bold;'>TOTAL</td>\n        <td style='font-weight:bold;'>{{getTotalBill()}}</td>\n        <td colspan=\"2\" align=\"right\"><button (click)=\"SendOrder()\" [disabled]=\"!bill.length || billEditMode\">Send Order</button></td>\n      </tr>\n      <!-- <tr style='font-size:18px' \n       *ngIf=\"spicy || noTarri || tarriSeperate || noOnion || noPohe || packSeperate || noMatki || noPav || noBundi || exOnion || exMatki || mediumRassa || spicyRassa || nonSpicyRassa || exBundi || spNote\">\n       <td ></td>\n       <td style='font-weight:bold;'>Note:</td>\n        <td colspan=\"4\" style=\"width: 300px;font-weight:bold;\">\n          <span *ngIf=\"mediumRassa\">&nbsp; <b>*</b> {{mediumRassa}} M</span>\n          <span *ngIf=\"spicyRassa\">&nbsp; <b>*</b> {{spicyRassa}} S</span>\n          <span *ngIf=\"nonSpicyRassa\">&nbsp; <b>*</b> {{nonSpicyRassa}} NS</span>\n          <span *ngIf=\"spicy\">&nbsp; <b>*</b> Spicy</span>\n          <span *ngIf=\"noTarri\">&nbsp; <b>*</b> No Tarri</span>\n          <span *ngIf=\"tarriSeperate\">&nbsp; <b>*</b> Tarri Seperate</span>\n          <span *ngIf=\"noOnion\">&nbsp; <b>*</b> No Onion</span>\n          <span *ngIf=\"noPohe\">&nbsp; <b>*</b> No Pohe</span>\n          <span *ngIf=\"noMatki\">&nbsp; <b>*</b> No Matki</span>\n          <span *ngIf=\"noPav\">&nbsp; <b>*</b> No Pav</span>\n          <span *ngIf=\"noBundi\">&nbsp; <b>*</b> No Bundi</span>\n          <span *ngIf=\"exOnion\">&nbsp; <b>*</b> Ex Onion</span>\n          <span *ngIf=\"exMatki\">&nbsp; <b>*</b> Ex Matki</span>\n          <span *ngIf=\"packSeperate\">&nbsp; <b>*</b> Pack Seperate</span>\n          <span *ngIf=\"exBundi\">&nbsp; <b>*</b> Ex Bundi</span>\n          <span *ngIf=\"spNote\">&nbsp; <b>*</b> {{spNote}}</span>\n        </td>\n      </tr> -->\n     <!--  <tr>\n          <td colspan=\"5\" style='text-align:center;font-weight:bold;'>**THANK YOU**<BR>**VISIT AGAIN**</td>\n            <td></td>\n      </tr>   -->    \n    </table>\n\n    <div *ngIf=\"emp\">\n        <ul>\n          <li *ngFor=\"let e of emp\">{{e.itemno}} {{e.itemname}} {{e.price}}</li>\n        </ul>\n      </div>\n  </div>\n\n  <div style=\"margin-top: 10px;font-weight: bold;\">\n    <span *ngIf=\"bill.length\">\n    <tr>\n      <td>\n        <table style=\"font-size: 14px!important\">\n        <tr>\n          <td  colspan=\"3\">CN: <input type=\"text\" style=\"width: 200px;\" [(ngModel)]=\"cname\" placeholder=\"Customer Name\"></td>\n        </tr>\n        <tr>    \n          <td>M <input id=\"mediumRassa\" type=\"number\" (ngModelChange)=\"addNoteInBill()\" style=\"width: 25px;\" [(ngModel)]=\"mediumRassa\" min=\"0\"></td>\n          <td>S <input style=\"width: 25px;\" type=\"number\" (ngModelChange)=\"addNoteInBill()\" [(ngModel)]=\"spicyRassa\"></td>\n          <td>NS <input type=\"number\" style=\"width: 25px;\" (ngModelChange)=\"addNoteInBill()\"  [(ngModel)]=\"nonSpicyRassa\"></td>\n\n        </tr>\n        \n        <tr>\n          <td><input type=\"checkbox\" (ngModelChange)=\"addNoteInBill()\" value=\"Spicy\" [disabled]=\"noTarri\" [(ngModel)]=\"spicy\"/> Spicy&nbsp;&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" (ngModelChange)=\"addNoteInBill()\" value=\"Non Spicy\" [disabled]=\"spicy || tarriSeperate\" [(ngModel)]=\"noTarri\"/> No Tarri&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" (ngModelChange)=\"addNoteInBill()\" value=\"Tarri Seperate\" [disabled]=\"noTarri\" [(ngModel)]=\"tarriSeperate\"/> Tarri Sep.&nbsp;&nbsp;</td>\n        </tr>\n            <tr> \n          <td><input type=\"checkbox\" (ngModelChange)=\"addNoteInBill()\" value=\"No Onion\" [disabled]=\"exOnion\" [(ngModel)]=\"noOnion\"/> No Oni&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" (ngModelChange)=\"addNoteInBill()\" value=\"No Matki\" [disabled]=\"exMatki\" [(ngModel)]=\"noMatki\"/> No Mat&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" (ngModelChange)=\"addNoteInBill()\" value=\"No Pav\" [disabled]=\"\" [(ngModel)]=\"noPav\"/> No Pav&nbsp;&nbsp;</td>\n    \n        </tr>\n        <tr>\n          <td><input type=\"checkbox\" (ngModelChange)=\"addNoteInBill()\" value=\"No Bundi\" [disabled]=\"exBundi\" [(ngModel)]=\"noBundi\"/> No Bun&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" (ngModelChange)=\"addNoteInBill()\" value=\"Ex Onion\" [disabled]=\"noOnion\" [(ngModel)]=\"exOnion\"/> Ex Oni&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" (ngModelChange)=\"addNoteInBill()\" value=\"Ex Matki\" [disabled]=\"noMatki\" [(ngModel)]=\"exMatki\"/> Ex Mat&nbsp;&nbsp;</td>\n        </tr>\n        <tr>\n          <td><input type=\"checkbox\" (ngModelChange)=\"addNoteInBill()\" value=\"Pack Seperate\" [(ngModel)]=\"packSeperate\"/> Pack Sep&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" (ngModelChange)=\"addNoteInBill()\" value=\"No Pohe\" [disabled]=\"\" [(ngModel)]=\"noPohe\"/> No Pohe&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" (ngModelChange)=\"addNoteInBill()\" value=\"Ex Bundi\" [disabled]=\"noBundi\" [(ngModel)]=\"exBundi\"/> Ex Bun&nbsp;&nbsp;</td>\n        </tr>\n        <tr>\n          <td colspan=\"3\"><input type=\"text\" (ngModelChange)=\"addNoteInBill()\" style=\"width: 200px;\" [(ngModel)]=\"spNote\" placeholder=\"Special Note\"/></td>\n\n        </tr>\n      </table>\n       <br>\n      </td>\n    </tr>\n       \n      \n  </span>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/orders/order-details/order-details.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/orders/order-details/order-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(http, datepipe, MainSer, router, cdr) {
        var _this = this;
        this.http = http;
        this.datepipe = datepipe;
        this.MainSer = MainSer;
        this.router = router;
        this.cdr = cdr;
        this.bill = [];
        this.tableBill = [];
        this.menuIndex = "0";
        this.menuQty = 1;
        this.totalPrice = 0;
        this.todayDate = new Date();
        this.spicy = false;
        this.noTarri = false;
        this.tarriSeperate = false;
        this.noOnion = false;
        this.noPohe = false;
        this.noMatki = false;
        this.noPav = false;
        this.noBundi = false;
        this.exOnion = false;
        this.exMatki = false;
        this.packSeperate = false;
        this.exBundi = false;
        this.spNote = "";
        this.mediumRassa = 0;
        this.spicyRassa = 0;
        this.nonSpicyRassa = 0;
        this.cname = "";
        this.loginBtnText = "Sign In";
        this.managerMode = false;
        this.ownerMode = false;
        this.bhukumShopMode = false;
        this.userPassword = "";
        this.billEditMode = false;
        this.cNote = "";
        this.disabledSendOrder = false;
        //.subscribe( this.items = items);
        this.branchName = this.MainSer.getbranchName();
        this.todayDate = new Date();
        this.latest_date = this.datepipe.transform(this.todayDate, 'MM-dd-yyyy');
        if (localStorage.getItem('menu') == null) {
            this.MainSer.getItemsData().subscribe(function (resp) {
                _this.items = resp;
                localStorage.setItem("menu", JSON.stringify(_this.items));
                _this.getBillForTable();
            });
        }
        else {
            this.items = JSON.parse(localStorage.getItem('menu'));
            this.getBillForTable();
        }
        //this.getItemsData()
        // console.log(this.items)
        this.subscription1 = this.MainSer.mangerMode.subscribe(function (value) {
            _this.managerMode = value;
            if (_this.managerMode)
                _this.loginBtnText = "Sign Out";
        });
        this.subscription2 = this.MainSer.ownerMode.subscribe(function (value) {
            _this.ownerMode = value;
            if (_this.ownerMode)
                _this.loginBtnText = "Sign Out";
        });
        this.subscription3 = this.MainSer.bhukumShopMode.subscribe(function (value) {
            _this.bhukumShopMode = value;
            if (_this.bhukumShopMode)
                _this.loginBtnText = "Sign Out";
        });
    }
    OrderDetailsComponent.prototype.addMenu = function () {
        if (this.MainSer.getTableNo() == 0) {
            alert("Please Select Table");
        }
        else {
            if (this.menuIndex != "" && this.menuQty > 0) {
                this.todayDate = new Date();
                this.latest_date = this.datepipe.transform(this.todayDate, 'MM-dd-yyyy');
                this.latest_time = this.datepipe.transform(this.todayDate, 'shortTime');
                this.amt = parseInt(this.items[this.menuIndex].price) * (this.menuQty);
                this.bill.push({ "itemno": this.menuIndex, "itemname": this.items[this.menuIndex].itemname, "price": this.items[this.menuIndex].price, "qty": this.menuQty, "amount": this.amt });
                this.totalPrice += this.amt;
                this.menuIndex = "0";
                //document.getElementById("menu").focus();
                this.menuQty = 1;
                //this.resetBillsVaribale(false);     
            }
        }
    };
    OrderDetailsComponent.prototype.getTotalBill = function (amt) {
        var totalAmount = 0;
        for (var i = 0; i < this.tableBill.length; i++) {
            totalAmount += parseInt(this.items[this.tableBill[i].itemno - 1].price) * (this.tableBill[i].qty);
        }
        return totalAmount;
    };
    OrderDetailsComponent.prototype.removeMenu = function (index) {
        var _this = this;
        //console.log(index);
        if (this.billEditMode) {
            if (window.confirm('Are sure you want to DELETE selected item?')) {
                var json = JSON.stringify({ bill_id: this.bill[index].bill_id });
                var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
                header.append("Content-Type", "application/json");
                this.http.post("http://" + this.MainSer.IPAddress + ":3000/api/removeBillItem", json, { headers: header })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    //console.log("success"+res);
                    _this.totalPrice -= parseInt(_this.bill[index].qty) * parseInt(_this.bill[index].price);
                    _this.bill.splice(index, 1);
                    //  document.getElementById("menu").focus();
                    if (_this.bill.length == 0) {
                        _this.billEditMode = false;
                        _this.resetBillsVaribale(false);
                    }
                }, function (error) {
                    alert("Please Check Command Promt");
                });
            }
        }
        else {
            this.totalPrice -= parseInt(this.bill[index].qty) * parseInt(this.bill[index].price);
            this.bill.splice(index, 1);
            //  document.getElementById("menu").focus();
            if (this.bill.length == 0) {
                this.resetBillsVaribale(false);
            }
        }
    };
    OrderDetailsComponent.prototype.getCNote = function () {
        this.cNote = "";
        if (this.mediumRassa)
            this.cNote += "&nbsp; <b>*</b> " + this.mediumRassa + " M<br>";
        if (this.spicyRassa)
            this.cNote += "&nbsp; <b>*</b> " + this.spicyRassa + " S<br>";
        if (this.nonSpicyRassa)
            this.cNote += "&nbsp; <b>*</b> " + this.nonSpicyRassa + " NS<br>";
        if (this.spicy)
            this.cNote += "&nbsp; <b>*</b> Spicy<br>";
        if (this.noTarri)
            this.cNote += "&nbsp; <b>*</b> No Tarri<br>";
        if (this.tarriSeperate)
            this.cNote += "&nbsp; <b>*</b> Tarri Seperate<br>";
        if (this.noOnion)
            this.cNote += "&nbsp; <b>*</b> No Onion<br>";
        if (this.noPohe)
            this.cNote += "&nbsp; <b>*</b> No Pohe<br>";
        if (this.noMatki)
            this.cNote += "&nbsp; <b>*</b> No Matki<br>";
        if (this.noPav)
            this.cNote += "&nbsp; <b>*</b> No Pav<br>";
        if (this.noBundi)
            this.cNote += "&nbsp; <b>*</b> No Bundi<br>";
        if (this.exOnion)
            this.cNote += "&nbsp; <b>*</b> Ex Onion<br>";
        if (this.exMatki)
            this.cNote += "&nbsp; <b>*</b> Ex Matki<br>";
        if (this.packSeperate)
            this.cNote += "&nbsp; <b>*</b> Pack Seperate<br>";
        if (this.exBundi)
            this.cNote += "&nbsp; <b>*</b> Ex Bundi<br>";
        if (this.spNote)
            this.cNote += "&nbsp; <b>*</b> " + this.spNote + "<br>";
    };
    OrderDetailsComponent.prototype.updateBill = function () {
    };
    OrderDetailsComponent.prototype.billPaid = function () {
        var _this = this;
        if (window.confirm('Are sure you want to mark bill as PAID?')) {
            var json = JSON.stringify({ billno: this.tableBill[0].billno });
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            header.append("Content-Type", "application/json");
            this.http.post("http://" + this.MainSer.IPAddress + ":3000/api/paidTableBill", json, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                //console.log("success"+res);
                _this.printBillSuccess();
            }, function (error) {
                alert("Please Check Command Promt");
            });
        }
    };
    OrderDetailsComponent.prototype.addBill = function () {
        var _this = this;
        var _loop_1 = function (i) {
            // foodstatus should be preparing for proper working from kitchen - for temporary adjustment we set direcly ready
            json = JSON.stringify({ itemno: parseInt(this_1.bill[i].itemno) + 1, qty: this_1.bill[i].qty, billno: this_1.billno, date: this_1.latest_date, time: this_1.latest_time, cname: this_1.cname, note: this_1.bill[i].note, foodstatus: 'ready', billstatus: 'unpaid', waitername: this_1.MainSer.getWaiterName(), tableno: this_1.MainSer.getTableNo() });
            header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            header.append("Content-Type", "application/json");
            this_1.http.post("http://" + this_1.MainSer.IPAddress + ":3000/api/add", json, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                //console.log("success"+res);
                if (i == _this.bill.length - 1)
                    _this.printBillSuccess();
            }, function (error) {
                if (i == _this.bill.length - 1)
                    alert("Please Check Command Promt");
            });
        };
        var this_1 = this, json, header;
        //this.getCNote();
        for (var i = 0; i < this.bill.length; i++) {
            _loop_1(i);
        }
    };
    OrderDetailsComponent.prototype.printBillSuccess = function () {
        //this.billno++; 
        //window.print();
        this.bill = []; //.splice(0,this.bill.length);
        this.totalPrice = 0;
        this.copyMessage(this.cname);
        this.resetBillsVaribale(false);
        this.getBillForTable();
        //document.getElementById("menu").focus();
        this.disabledSendOrder = false;
    };
    OrderDetailsComponent.prototype.SendOrder = function () {
        if (this.bill.length && !this.disabledSendOrder && !this.billEditMode) {
            this.disabledSendOrder = true;
            //Generate Bill no n send biil from addBill call 
            //this.addBill(); 
            this.getBillNo();
        }
    };
    OrderDetailsComponent.prototype.editBill = function () {
        this.bill = this.tableBill;
        this.cdr.detectChanges();
        this.tableBill = [];
        this.billEditMode = true;
        //this.cdr.detectChanges();
    };
    OrderDetailsComponent.prototype.cancelEditBill = function () {
        this.tableBill = this.bill;
        this.bill = [];
        this.billEditMode = false;
        this.cdr.detectChanges();
    };
    OrderDetailsComponent.prototype.resetBillsVaribale = function (flag) {
        this.spicy = flag;
        this.noTarri = flag;
        this.tarriSeperate = flag;
        this.noOnion = flag;
        this.noPohe = flag;
        this.noMatki = flag;
        this.noPav = flag;
        this.noBundi = flag;
        this.exOnion = flag;
        this.exMatki = flag;
        this.packSeperate = flag;
        this.exBundi = flag;
        this.spNote = "";
        this.mediumRassa = 0;
        this.spicyRassa = 0;
        this.nonSpicyRassa = 0;
        this.cname = "";
    };
    OrderDetailsComponent.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        // selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    OrderDetailsComponent.prototype.getItemsData = function () {
        var _this = this;
        if (localStorage.getItem('menu') == null) {
            this.http.get("http://" + this.MainSer.IPAddress + ":3000/api/GetItemsData")
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) { return _this.items = resp; });
        }
        else {
            this.items = JSON.parse(localStorage.getItem('menu'));
        }
    };
    OrderDetailsComponent.prototype.getBillNo = function () {
        var _this = this;
        //console.log("this.tableBill.length "+this.tableBill.length)
        if (this.tableBill.length) { //flow to add in existing bill
            this.billno = this.tableBill[0].billno;
            this.cname = this.tableBill[0].cname;
            this.addBill();
        }
        else {
            //this.http.get("http://"+this.MainSer.IPAddress+":3000/api/billnobymax")
            this.http.get("http://" + this.MainSer.IPAddress + ":3000/api/billno?date=" + this.latest_date)
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) {
                _this.billno = resp;
                //this.setBillNo()
                /* if(resp!="")
                  this.billno=resp[0]["MAX(billno)"]+1;
                else
                  this.billno=1; */
                if (_this.billno != "")
                    _this.billno = _this.billno[0].billno + 1;
                else
                    _this.billno = 1;
                // console.log("billno-- "+this.billno)
                _this.addBill();
            });
        }
    };
    OrderDetailsComponent.prototype.noteCheckboxClick = function (chkBoxName) {
        if (chkBoxName == "spicy") {
            if (this.spicy == true)
                this.spicy = false;
            else
                this.spicy = true;
        }
        if (chkBoxName == "noTarri") {
            if (this.noTarri == true)
                this.noTarri = false;
            else
                this.noTarri = true;
        }
        if (chkBoxName == "tarriSeperate") {
            if (this.tarriSeperate == true)
                this.tarriSeperate = false;
            else
                this.tarriSeperate = true;
        }
        if (chkBoxName == "noOnion") {
            if (this.noOnion == true)
                this.noOnion = false;
            else
                this.noOnion = true;
        }
        if (chkBoxName == "noPohe") {
            if (this.noPohe == true)
                this.noPohe = false;
            else
                this.noPohe = true;
        }
        if (chkBoxName == "noMatki") {
            if (this.noMatki == true)
                this.noMatki = false;
            else
                this.noMatki = true;
        }
        if (chkBoxName == "noPav") {
            if (this.noPav == true)
                this.noPav = false;
            else
                this.noPav = true;
        }
        if (chkBoxName == "noBundi") {
            if (this.noBundi == true)
                this.noBundi = false;
            else
                this.noBundi = true;
        }
        if (chkBoxName == "exOnion") {
            if (this.exOnion == true)
                this.exOnion = false;
            else
                this.exOnion = true;
        }
        if (chkBoxName == "exMatki") {
            if (this.exMatki == true)
                this.exMatki = false;
            else
                this.exMatki = true;
        }
        if (chkBoxName == "packSeperate") {
            if (this.packSeperate == true)
                this.packSeperate = false;
            else
                this.packSeperate = true;
        }
        if (chkBoxName == "exBundi") {
            if (this.exBundi == true)
                this.exBundi = false;
            else
                this.exBundi = true;
        }
    };
    OrderDetailsComponent.prototype.addNoteInBill = function () {
        var _this = this;
        setTimeout(function () {
            _this.getCNote();
            _this.bill[_this.bill.length - 1].note = _this.cNote;
        }, 500);
    };
    OrderDetailsComponent.prototype.ngOnInit = function () {
    };
    OrderDetailsComponent.prototype.getBillForTable = function () {
        var _this = this;
        this.http.get("http://" + this.MainSer.IPAddress + ":3000/api/getBillForTable?tableNo=" + this.MainSer.getTableNo())
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.tableBill = resp;
            _this.getBillNo();
            if (_this.tableBill.length) {
                _this.cname = _this.tableBill[0].cname;
            }
            _this.cdr.detectChanges();
        });
    };
    OrderDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.subscription1)
            this.subscription1.unsubscribe();
        if (this.subscription2)
            this.subscription2.unsubscribe();
        if (this.subscription3)
            this.subscription3.unsubscribe();
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    //@HostListener('window:keyup', ['$event'])
    /* keyEvent(event: KeyboardEvent) {
      console.log(event.keyCode);
      if(event.keyCode==107)
      {
        //this.SendOrder()
      }
      //32)
      if(event.keyCode==192)
      {
        document.getElementById("menu").focus();
        this.menuIndex="0"
        this.menuQty=1
      }
  
      if(event.keyCode==109)
      {
        document.getElementById("mediumRassa").focus();
      }
  
  
      if(event.keyCode==49 && !this.noTarri)
        this.noteCheckboxClick("spicy");
  
      if(event.keyCode==50 && !this.spicy)
        this.noteCheckboxClick("noTarri");
  
      if(event.keyCode==51 && !this.noTarri)
        this.noteCheckboxClick("tarriSeperate");
  
      if(event.keyCode==52 && !this.exOnion)
        this.noteCheckboxClick("noOnion");
  
      if(event.keyCode==189)
        this.noteCheckboxClick("noPohe");
  
      if(event.keyCode==53 && !this.exMatki)
        this.noteCheckboxClick("noMatki");
  
      if(event.keyCode==54)
        this.noteCheckboxClick("noPav");
  
      if(event.keyCode==55 && !this.exBundi)
        this.noteCheckboxClick("noBundi");
  
      if(event.keyCode==187 && !this.noBundi)
        this.noteCheckboxClick("exBundi");
  
      if(event.keyCode==56 && !this.noOnion)
        this.noteCheckboxClick("exOnion");
      
      if(event.keyCode==57 && !this.noMatki)
        this.noteCheckboxClick("exMatki");
  
      if(event.keyCode==48)
        this.noteCheckboxClick("packSeperate");
    } */
    /* onKeyup(event){
      if (event.keyCode === 13) {
        //console.log(event);
       // this.addMenu()
      }
    }
    onKeypress(event){
      const pattern = /[0-9\ ]/;
      let inputChar = String.fromCharCode(event.charCode);
  
      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
    } */
    OrderDetailsComponent.prototype.getTotalBillAmount = function (amt) {
        return amt;
    };
    OrderDetailsComponent.prototype.plusQty = function () {
        if (this.menuQty < 99)
            this.menuQty++;
    };
    OrderDetailsComponent.prototype.minusQty = function () {
        if (this.menuQty != 0)
            this.menuQty--;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrderDetailsComponent.prototype, "latest_date", void 0);
    OrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! ./order-details.component.html */ "./src/app/orders/order-details/order-details.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
            styles: [__webpack_require__(/*! ./order-details.component.css */ "./src/app/orders/order-details/order-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found-component/page-not-found-component.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/page-not-found-component/page-not-found-component.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found-component/page-not-found-component.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/page-not-found-component/page-not-found-component.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found-component works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found-component/page-not-found-component.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/page-not-found-component/page-not-found-component.component.ts ***!
  \********************************************************************************/
/*! exports provided: PageNotFoundComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponentComponent", function() { return PageNotFoundComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponentComponent = /** @class */ (function () {
    function PageNotFoundComponentComponent() {
    }
    PageNotFoundComponentComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found-component',
            template: __webpack_require__(/*! ./page-not-found-component.component.html */ "./src/app/page-not-found-component/page-not-found-component.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found-component.component.css */ "./src/app/page-not-found-component/page-not-found-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponentComponent);
    return PageNotFoundComponentComponent;
}());



/***/ }),

/***/ "./src/app/pav/add-pav-entry/add-pav-entry.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pav/add-pav-entry/add-pav-entry.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/pav/add-pav-entry/add-pav-entry.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pav/add-pav-entry/add-pav-entry.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3>Add Pav Entry</h3>\n</div>\n<div class=\"containerDiv\">\n  <!-- <b>Select Date For Edit:</b> &nbsp;<input type=\"date\" [(ngModel)]=\"pDate\" [max]=\"todaySysDate\"/>&nbsp;\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!pDate\" (click)=\"getLastSavedValues('manual',pDate)\">Submit</button>\n        <hr> -->\n\n        <!-- &nbsp;<button class=\"btn btn-success\" (click)=\"this.router.navigate(['pavReport'], {});\">Report</button> --><br><br> \n      <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Transaction Type</label>\n          <div class=\"col-sm-3\">\n            <select class=\"form-control-plaintext border\"  [(ngModel)]=\"transactionType\" (change)=\"onChange($event)\">\n              <option value='Pav Entry' [selected]>Pav Entry</option>\n              <option value='Payment'>Payment</option>\n            </select>                  \n          </div>\n        </div>\n  <div> \n    <form [formGroup]=\"pavEntryForm\" (ngSubmit)=\"savePavEntry()\">     \n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Ordered Pav</label>\n        <div class=\"col-sm-3\">\n          <input [attr.disabled]=\"transactionType == 'Payment' ? 'disabled' : null\" type=\"number\" formControlName=\"orderedPav\" class=\"form-control-plaintext  border\" min=\"1\"/>\n          <div *ngFor=\"let validation of pavEntryDetails.orderedPav\">\n            <div class=\"invalid-feedback\" *ngIf=\"pavEntryForm.get('orderedPav').hasError(validation.type) && pavEntryForm.get('orderedPav').touched\">\n            {{validation.message}}</div>\n          </div>          \n        </div>\n      </div>      \n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Return Pav:</label>\n        <div class=\"col-sm-3\">\n          <input [attr.disabled]=\"transactionType == 'Payment' ? 'disabled' : null\" type=\"number\" formControlName=\"returnPav\" class=\"form-control-plaintext  border\" min=\"1\"/>\n          <div *ngFor=\"let validation of pavEntryDetails.returnPav\">\n            <div class=\"invalid-feedback\" *ngIf=\"pavEntryForm.get('returnPav').hasError(validation.type) && pavEntryForm.get('returnPav').touched\">\n            {{validation.message}}</div>\n          </div>          \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Paid Pav:</label>\n        <div class=\"col-sm-3\">\n          <input [attr.disabled]=\"transactionType == 'Pav Entry' ? 'disabled' : null\"type=\"number\" formControlName=\"paidPav\" class=\"form-control-plaintext  border\" min=\"1\"/>\n          <div *ngFor=\"let validation of pavEntryDetails.paidPav\">\n            <div class=\"invalid-feedback\" *ngIf=\"pavEntryForm.get('paidPav').hasError(validation.type) && pavEntryForm.get('paidPav').touched\">\n            {{validation.message}}</div>\n          </div>          \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Note:</label>\n        <div class=\"col-sm-3\">\n          <input type=\"text\" formControlName=\"note\" class=\"form-control-plaintext  border\"/>\n          \n        </div>\n      </div>\n\n        <div class=\"form-group row ml-1\">\n          <button type=\"submit\" class=\"btn btn-primary border\"  [disabled]=\"!pavEntryForm.valid\"  >Add</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"updateEmpData()\"  *ngIf=\"false\" [disabled]=\"!pavEntryForm.valid\">Update</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"cancel()\">Cancel</button> \n        </div>\n      </form>\n    </div>\n\n    <div class=\" row\" *ngIf=\"pavEntryObj.length\">\n      <table class=\"table table-bordered col-sm-8\">\n        <tr>\n          <th>Sr. No</th>\n          <th>Tran Date</th>\n          <th>Ordered</th>\n          <th>Return</th>\n          <th>Paid</th>\n          <th>Balance</th>\n          <th>Note</th>\n        </tr>\n        <tr *ngFor=\"let p of pavEntryObj;let i = index;trackBy: trackChatMessage\">\n          <td>{{i+1}}</td>\n          <td>{{p.tranDate | date:'dd/MM/yyyy'}}</td>\n          <td>{{p.orderedPav}}</td>\n          <td>{{p.returnPav}}</td>\n          <td>{{p.paidPav}}</td>\n          <td>{{p.balance}}</td>\n          <td>{{p.note}}</td>\n        </tr>\n      </table>\n</div>"

/***/ }),

/***/ "./src/app/pav/add-pav-entry/add-pav-entry.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pav/add-pav-entry/add-pav-entry.component.ts ***!
  \**************************************************************/
/*! exports provided: AddPavEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPavEntryComponent", function() { return AddPavEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPavEntryComponent = /** @class */ (function () {
    function AddPavEntryComponent(router, http, datepipe) {
        this.router = router;
        this.http = http;
        this.datepipe = datepipe;
        this.pavEntryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            orderedPav: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            returnPav: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            paidPav: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([]))
        });
        this.pavEntryDetails = {
            'orderedPav': [{ type: 'required', message: 'Field is required' }],
            'returnPav': [{ type: 'required', message: 'Field is required' }],
            'paidPav': [{ type: 'required', message: 'Field is required' }]
        };
        this.pavRate = 36;
        this.pavEntryObj = [];
        this.currentBalance = 0;
        /* totOrderedPav=0;
        totReturnPav=0;
        totPaidPav=0; */
        this.transactionType = "Pav Entry";
        var tmpTodaysDate;
        tmpTodaysDate = new Date();
        this.getTodaysRecords();
        //this.getLastSavedValues("auto",tmpTodaysDate);
    }
    AddPavEntryComponent.prototype.savePavEntry = function () {
        var _this = this;
        var tmpTodaysDate;
        if (this.pType == "manual") {
        }
        else {
            tmpTodaysDate = new Date();
            this.todayDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
        }
        this.http.get("http://localhost:3000/api/pavEntryDate?tranDate=" + this.todayDate)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.pavEntryObj = resp;
            _this.getBalance();
        });
    };
    AddPavEntryComponent.prototype.addPavEntry = function () {
        var _this = this;
        var tmpTodaysDate = new Date();
        if (this.pType != "manual") {
            this.todayDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
        }
        // 
        var netPav = parseInt(this.pavEntryForm.value.orderedPav) - parseInt(this.pavEntryForm.value.returnPav);
        this.currentBalance += netPav - parseInt(this.pavEntryForm.value.paidPav);
        //this.totOrderedPav+= parseInt(this.pavEntryForm.value.orderedPav); 
        //this.totReturnPav+= parseInt(this.pavEntryForm.value.returnPav); 
        //this.totPaidPav+= parseInt(this.pavEntryForm.value.paidPav);
        var json = JSON.stringify({ tranDate: this.todayDate,
            orderedPav: this.pavEntryForm.value.orderedPav,
            returnPav: this.pavEntryForm.value.returnPav,
            paidPav: this.pavEntryForm.value.paidPav,
            balance: this.currentBalance,
            note: this.pavEntryForm.value.note });
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append("Content-Type", "application/json");
        this.http.post("http://localhost:3000/api/addPavEntry", json, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.getTodaysRecords();
            alert("Pav Entry Added!");
        });
        this.pavEntryForm.reset();
        this.pavEntryForm.get('paidPav').setValue(0);
    };
    AddPavEntryComponent.prototype.updatePavEntry = function () {
        var netPav = parseInt(this.pavEntryForm.value.orderedPav) - parseInt(this.pavEntryForm.value.returnPav);
        //this.currentBalance+= netPav - parseInt(this.pavEntryForm.value.paidPav);
        var json = JSON.stringify({ tranDate: this.todayDate, orderedPav: this.pavEntryForm.value.orderedPav, returnPav: this.pavEntryForm.value.returnPav, paidPav: this.pavEntryForm.value.paidPav, note: this.pavEntryForm.value.note });
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append("Content-Type", "application/json");
        this.http.post("http://localhost:3000/api/updatePavEntry", json, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            alert("Pav Entry Updated!");
        });
        this.pavEntryForm.reset();
    };
    AddPavEntryComponent.prototype.getBalance = function () {
        var _this = this;
        this.http.get("http://localhost:3000/api/pavEntryBalance")
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            if (resp.length != 0) {
                _this.currentBalance = parseInt(resp[0].balance);
                /* this.totOrderedPav = parseInt(resp[0].totOrderedPav);
                this.totReturnPav = parseInt(resp[0].totReturnPav);
                this.totPaidPav = parseInt(resp[0].totPaidPav); */
            }
            else {
                _this.currentBalance = 0;
                /* this.totOrderedPav=0;
                this.totReturnPav=0;
                this.totPaidPav=0; */
            }
            //if(this.pavEntryObj.length==0)
            _this.addPavEntry();
            //else
            // this.updatePavEntry();
        });
    };
    AddPavEntryComponent.prototype.getLastSavedValues = function (type, tmpTodaysDate) {
        var _this = this;
        this.pType = type;
        this.todayDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
        this.http.get("http://localhost:3000/api/pavEntryDate?tranDate=" + this.todayDate)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            if (resp.length != 0) {
                _this.pavEntryForm.get('orderedPav').setValue(resp[0].orderedPav);
                _this.pavEntryForm.get('returnPav').setValue(resp[0].returnPav);
                _this.pavEntryForm.get('paidPav').setValue(resp[0].paidPav);
                _this.pavEntryForm.get('note').setValue(resp[0].note);
            }
            else {
                if (type == "manual")
                    _this.pavEntryForm.reset();
                alert("No Record Found!");
            }
        });
    };
    AddPavEntryComponent.prototype.getTodaysRecords = function () {
        var _this = this;
        this.todayDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
        this.http.get("http://localhost:3000/api/pavEntryDate?tranDate=" + this.todayDate)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.pavEntryObj = resp;
        });
    };
    AddPavEntryComponent.prototype.cancel = function () {
        this.router.navigate(['home'], {});
    };
    AddPavEntryComponent.prototype.onChange = function (e) {
        console.log("transactionType" + this.transactionType);
        console.log("transactionType" + e);
        if (this.transactionType == "Pav Entry") {
            this.pavEntryForm.get('paidPav').setValue(0);
            this.pavEntryForm.get('orderedPav').setValue(null);
            this.pavEntryForm.get('returnPav').setValue(null);
        }
        else {
            this.pavEntryForm.get('orderedPav').setValue(0);
            this.pavEntryForm.get('returnPav').setValue(0);
            this.pavEntryForm.get('paidPav').setValue(null);
        }
        this.pavEntryForm.get('note').setValue(null);
    };
    AddPavEntryComponent.prototype.ngOnInit = function () {
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
        this.pavEntryForm.get('paidPav').setValue(0);
    };
    AddPavEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-pav-entry',
            template: __webpack_require__(/*! ./add-pav-entry.component.html */ "./src/app/pav/add-pav-entry/add-pav-entry.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
            styles: [__webpack_require__(/*! ./add-pav-entry.component.css */ "./src/app/pav/add-pav-entry/add-pav-entry.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], AddPavEntryComponent);
    return AddPavEntryComponent;
}());



/***/ }),

/***/ "./src/app/pav/pav-report/pav-report.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pav/pav-report/pav-report.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/pav/pav-report/pav-report.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pav/pav-report/pav-report.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3>Pav Report:</h3>\n</div>\n<div class=\"containerDiv row\">\n\n  <div>\n    <!--       <span *ngIf=\"calcReport.length\">Search: <input  [(ngModel)]=\"searchString\"></span> \n     -->     \n      <b>Select Date: &nbsp; </b>\n      <b>From </b> <input type=\"date\" [(ngModel)]=\"inputStartDate\" [max]=\"todaySysDate\"/>&nbsp;\n      <b>To </b> <input type=\"date\" [(ngModel)]=\"inputEndDate\" [max]=\"todaySysDate\"/>&nbsp;\n      <button class=\"btn btn-primary\" (click)=\"getPavData('manual')\" [disabled]=\"!inputStartDate || !inputEndDate\">Submit</button>\n       <br><br> </div>\n        <br><br>\n        \n  <div class=\" row\" *ngIf=\"pavData.length\">\n    <table class=\"table table-bordered col-sm-8\">\n      <tr>\n        <th>Ordered</th>\n        <th>Return</th>\n        <th>Used</th>\n        <th>Paid</th>\n        <th>Unpaid</th>\n        <th>Due Amount</th>\n      </tr>\n   \n      <tr>\n        <td>{{orderPav}}</td>\n        <td>{{returnPav}}</td>\n        <td>{{usedPav}}</td>\n        <td>{{paidPav}}</td>\n        <td>{{unpaidPav}}</td>\n        <td>{{ unpaidPav * pavRate }}</td>\n       \n      </tr>\n  </table>\n    \n  <div class=\"col-sm-12 row\"  *ngIf=\"pavData.length\">\n    <h5 *ngIf=\"type == 'manual'\"><b>Report From:</b> {{startDate}} <b>To:</b> {{endDate}}</h5>\n    <h5 *ngIf=\"type != 'manual'\"><b>Pav Payment Due Report:</b></h5>\n    <!-- <div>\n      <span *ngIf=\"pavData.length\">Search: <input  [(ngModel)]=\"searchString\"></span> \n    </div> -->\n    <br><br>\n    <table  class=\"table border\" *ngIf=\"pavData.length\">\n      <tr>\n          <th>No</th>\n          <th>Tran Date</th>\n          <th >Ordered</th>\n          <th >Return</th>\n          <th>Paid</th>\n          <th>Balance</th>\n          <th>Note</th>\n      </tr>\n      <tr *ngFor=\"let p of pavData | filter : 'note' : searchString;let i = index;trackBy: trackChatMessage\">\n        <td>{{i+1}}</td>\n        <td>{{p.tranDate | date:'dd/MM/yyyy'}}</td>\n        <td>{{p.orderedPav}}</td>\n        <td>{{p.returnPav}}</td>\n        <td>{{p.paidPav}}</td>\n        <td>{{p.balance}}</td>\n        <td>{{p.note}}</td>\n      </tr>\n      \n    </table>\n  </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pav/pav-report/pav-report.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pav/pav-report/pav-report.component.ts ***!
  \********************************************************/
/*! exports provided: PavReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PavReportComponent", function() { return PavReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PavReportComponent = /** @class */ (function () {
    function PavReportComponent(http, router, cdref, datepipe) {
        this.http = http;
        this.router = router;
        this.cdref = cdref;
        this.datepipe = datepipe;
        this.pavData = [];
        this.orderPav = 0;
        this.returnPav = 0;
        this.paidPav = 0;
        this.usedPav = 0;
        this.unpaidPav = 0;
        this.pavRate = 37;
        this.cdref.detach();
    }
    PavReportComponent.prototype.getPavData = function (type) {
        var _this = this;
        this.resetPavCount();
        if (type == "auto") {
            var tmpTodaysDate = new Date();
            this.endDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
            tmpTodaysDate.setDate(tmpTodaysDate.getDate() - 30);
            this.startDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
        }
        else {
            this.endDate = this.datepipe.transform(this.inputEndDate, 'yyyy-MM-dd');
            this.startDate = this.datepipe.transform(this.inputStartDate, 'yyyy-MM-dd');
            this.type = type;
        }
        this.http.get("http://localhost:3000/api/getPavData?startDate=" + this.startDate + "&endDate=" + this.endDate)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.pavData = resp;
            console.log("pavData " + _this.pavData);
            _this.pavCalculation();
            if (_this.pavData.length == 0) {
                alert("No Data Found!");
            }
        });
    };
    PavReportComponent.prototype.fGetLastNilBalanceRecord = function () {
        var _this = this;
        this.http.get("http://localhost:3000/api/getLastNilBalRecord")
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            if (resp.length != 0) {
                _this.lastNilBalRecord = resp[0];
                _this.fGetDueRecord();
            }
        });
    };
    PavReportComponent.prototype.fGetDueRecord = function () {
        var _this = this;
        this.http.get("http://localhost:3000/api/getDueRecords?pno=" + this.lastNilBalRecord.pno)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.pavData = resp;
            console.log("pavData " + _this.pavData);
            _this.pavCalculation();
            if (_this.pavData.length == 0) {
                alert("No Data Found!");
            }
        });
    };
    PavReportComponent.prototype.resetPavCount = function () {
        this.orderPav = 0;
        this.returnPav = 0;
        this.paidPav = 0;
        this.usedPav = 0;
        this.unpaidPav = 0;
    };
    PavReportComponent.prototype.pavCalculation = function () {
        var minusNo = 0;
        if (this.type != "manual")
            minusNo = 1;
        for (var i = 0; i < this.pavData.length - minusNo; i++) {
            this.orderPav += this.pavData[i].orderedPav;
            this.returnPav += this.pavData[i].returnPav;
            this.paidPav += this.pavData[i].paidPav;
        }
        this.usedPav = this.orderPav - this.returnPav;
        this.unpaidPav = this.usedPav - this.paidPav;
    };
    PavReportComponent.prototype.ngOnInit = function () {
        //this.getPavData("auto");
        this.fGetLastNilBalanceRecord();
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
    };
    PavReportComponent.prototype.ngAfterContentChecked = function () {
        this.cdref.detectChanges();
    };
    PavReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pav-report',
            template: __webpack_require__(/*! ./pav-report.component.html */ "./src/app/pav/pav-report/pav-report.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
            styles: [__webpack_require__(/*! ./pav-report.component.css */ "./src/app/pav/pav-report/pav-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], PavReportComponent);
    return PavReportComponent;
}());



/***/ }),

/***/ "./src/app/report1/report1.component.css":
/*!***********************************************!*\
  !*** ./src/app/report1/report1.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css'); */\r\n"

/***/ }),

/***/ "./src/app/report1/report1.component.html":
/*!************************************************!*\
  !*** ./src/app/report1/report1.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"header\">\n  <h3>Billing Report</h3>\n</div>\n<div class=\"containerDiv\">\n \n  <b>Select Date: </b> \n  <b>From </b> <input type=\"date\" [(ngModel)]=\"report1Date\" [max]=\"todaySysDate\"/>&nbsp;<b>To </b> <input type=\"date\" [(ngModel)]=\"report2Date\" [max]=\"todaySysDate\"/>&nbsp;\n  <button (click)=\"getReport()\" class=\"btn btn-primary\" [disabled]=\"!report1Date || !report2Date\">Submit</button>&nbsp;<!-- <button class=\"btn btn-primary\" (click)=\"sendReport('manual')\" *ngIf=\"report.length\">Send Report</button> --><br><br>\n  <span *ngIf=\"branchName=='Bhukum'\">\n      <b>Exclude:</b>&nbsp;  \n      <input type=\"checkbox\" value=\"Ladu\" [(ngModel)]=\"ladu\"/> Ladu&nbsp;&nbsp;&nbsp;\n      <input type=\"checkbox\" value=\"Small Bisleri\" [(ngModel)]=\"smallBislery\"/> Small Bislery&nbsp;&nbsp;\n      <input type=\"checkbox\" value=\"Water\" [(ngModel)]=\"bigBislery\"/> Big Bislery&nbsp;&nbsp;\n      <input type=\"checkbox\" value=\"farsanPacket\" [(ngModel)]=\"farsanPacket\"/> Fasan Packet&nbsp;&nbsp;\n      <input type=\"checkbox\" value=\"cCake\" [(ngModel)]=\"cCake\"/> C. Cake&nbsp;&nbsp;\n\n      <input type=\"checkbox\" value=\"vCake\" [(ngModel)]=\"vCake\"/> V. Cake&nbsp;&nbsp;\n      <input type=\"checkbox\" value=\"Tea\" [(ngModel)]=\"tea\"/> Tea&nbsp;&nbsp;\n      <input type=\"checkbox\" value=\"Coffee\" [(ngModel)]=\"coffee\"/> Coffee&nbsp;&nbsp;\n\n\n\n       <br>\n  </span>\n  \n\n    <div class=\"billDiv\"  *ngIf=\"report.length\">\n\n     \n          <h5><b>Item Wise Report For Date:</b>\n            <span *ngIf=\"latest_FromDate && latest_ToDate;else todayDateContent\">\n             {{latest_FromDate | date:'dd/MM/yyyy'}} <span *ngIf=\"latest_ToDate\"> To </span> {{latest_ToDate | date:'dd/MM/yyyy'}}\n            </span>\n            <ng-template #todayDateContent>{{todayDate | date:'dd/MM/yyyy'}}</ng-template>\n            \n            </h5><span><b>Report Generated on:</b> {{reportGeneratedDate}}</span>\n            \n\n      \n        \n        <div style=\" overflow-y: auto;height: 500px;width: 400px;margin-top: 3px;\">\n        <table class=\"table table-bordered\">\n        \n        <tr>\n            <th>Item No</th>\n            <th>Item Name</th>\n            <th>Quantity</th>\n            <th>Amount</th>\n        </tr>\n        <tr *ngFor=\"let r of report; let i = index\">\n            <td>{{r.itemno}}</td>\n            <td>{{r.itemname}}</td>            \n            <td>{{r.qty}}</td>\n            <td>Rs. {{r.qty*r.price}}</td>\n          </tr>\n          <tr>\n            <td colspan=\"3\"><b>Total</b></td>\n            <td>Rs. {{getTotal()}}</td>\n          </tr>\n          <tr *ngIf=\"branchName=='Bhukum'\">\n            <td colspan=\"2\"><b>Hemant</b></td>\n            <td colspan=\"2\">{{getSharing('hemant')}}</td>\n          </tr>\n          <tr  *ngIf=\"branchName=='Bhukum'\">\n              <td colspan=\"2\"><b>Sandeep</b></td>\n              <td colspan=\"2\">{{getSharing('prem')}}</td>\n          </tr>\n        </table>\n         </div>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/report1/report1.component.ts":
/*!**********************************************!*\
  !*** ./src/app/report1/report1.component.ts ***!
  \**********************************************/
/*! exports provided: Report1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Report1Component", function() { return Report1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Report1Component = /** @class */ (function () {
    function Report1Component(http, datepipe, MainSer) {
        this.http = http;
        this.datepipe = datepipe;
        this.MainSer = MainSer;
        this.report = [];
        this.report1Amount = 0;
        this.items = [];
        this.report1Date = "";
        this.report2Date = "";
        this.MonthlyReportAmount = 0;
        this.ladu = false;
        this.smallBislery = false;
        this.bigBislery = false;
        this.farsanPacket = false;
        this.cCake = false;
        this.vCake = false;
        this.tea = false;
        this.coffee = false;
        this.branchName = MainSer.getbranchName();
        this.getItemsData();
        var tmpTodaysDate = new Date();
        this.reportGeneratedDate = this.datepipe.transform(tmpTodaysDate, 'MM-dd-yyyy  hh:mm:ss');
    }
    Report1Component.prototype.getTotal = function () {
        this.report1Amount = 0;
        for (var i = 0; i < this.report.length; i++) {
            this.report1Amount += (parseInt(this.report[i].price) * parseInt(this.report[i].qty));
        }
        return this.report1Amount;
    };
    Report1Component.prototype.getReport = function () {
        var _this = this;
        var showTodayReport = false, tmpTodaysDate;
        if (this.report1Date != "" && this.report2Date != "") {
            this.latest_FromDate = this.datepipe.transform(this.report1Date, 'MM-dd-yyyy');
            this.latest_ToDate = this.datepipe.transform(this.report2Date, 'MM-dd-yyyy');
        }
        else {
            showTodayReport = true;
            tmpTodaysDate = new Date();
            this.todayDate = this.datepipe.transform(tmpTodaysDate, 'MM-dd-yyyy');
        }
        console.log("From " + this.latest_FromDate + " To " + this.latest_ToDate);
        var tmp, i;
        this.report = [];
        var excludeReport = false;
        for (i = 1; i <= this.items.length; i++) {
            if (((this.items[i - 1].itemname == "Ladu" && this.ladu == true) || (this.items[i - 1].itemname == "Small Bisleri" && this.smallBislery == true) || (this.items[i - 1].itemname == "Water" && this.bigBislery == true) || (this.items[i - 1].itemname == "Farsan 200GM" && this.farsanPacket == true) || (this.items[i - 1].itemname == "C. Cake" && this.cCake == true) || (this.items[i - 1].itemname == "V. Cake" && this.vCake == true) || (this.items[i - 1].itemname == "Tea" && this.tea == true) || (this.items[i - 1].itemname == "Coffee" && this.coffee == true)) && (this.branchName == 'Bhukum')) {
                excludeReport = true;
            }
            else {
                excludeReport = false;
            }
            if (!excludeReport) {
                if (showTodayReport) {
                    this.http.get("http://localhost:3000/api/todaysReport?itemno=" + i + "&todaysDate=" + this.todayDate)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (resp) {
                        tmp = resp;
                        if (tmp[0].qty == null)
                            tmp[0].qty = 0;
                        else
                            _this.report.push(tmp[0]);
                    });
                }
                else {
                    this.http.get("http://localhost:3000/api/reportBetweenDate?itemno=" + i + "&FromDate=" + this.latest_FromDate + "&ToDate=" + this.latest_ToDate)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (resp) {
                        tmp = resp;
                        if (tmp[0].qty == null)
                            tmp[0].qty = 0;
                        else
                            _this.report.push(tmp[0]);
                    });
                }
            }
        }
    };
    Report1Component.prototype.getItemsData = function () {
        var _this = this;
        if (localStorage.getItem('menu') == null) {
            this.http.get("http://localhost:3000/api/GetItemsData")
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) { _this.items = resp; _this.getReport(); });
        }
        else {
            this.items = JSON.parse(localStorage.getItem('menu'));
            this.getReport();
        }
    };
    Report1Component.prototype.getSharing = function (name) {
        if (name == "hemant") {
            return Math.round(this.getTotal() * 0.55);
        }
        else {
            return Math.round(this.getTotal() * 0.45);
        }
    };
    Report1Component.prototype.sendReport = function (type) {
        var onlineOffline = navigator.onLine;
        if (onlineOffline == true) {
            this.http.get("http://localhost:3000/api/sendReportMail?report=" + JSON.stringify(this.report) + "&total=" + this.report1Amount + "&type=" + type + "&FromDate=" + this.latest_FromDate + "&ToDate=" + this.latest_ToDate + "&generatedOn=" + this.reportGeneratedDate + "&branch=" + this.branchName)
                .map(function (res) { return res; })
                .subscribe(function (resp) {
                if (type == "manual")
                    alert("Report Sent Successfully");
            });
        }
        else {
            alert("Check Your Internet Connection!");
        }
    };
    Report1Component.prototype.ngOnInit = function () {
        //setTimeout(() => this.sendReport('auto'), 3600000);
        //this.sendReport('auto');
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
    };
    Report1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report1',
            template: __webpack_require__(/*! ./report1.component.html */ "./src/app/report1/report1.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
            styles: [__webpack_require__(/*! ./report1.component.css */ "./src/app/report1/report1.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]])
    ], Report1Component);
    return Report1Component;
}());



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(function (singleItem) { return singleItem[field].toLowerCase().includes(value.toLowerCase()); });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/take-away-home/take-away-home.component.css":
/*!*************************************************************!*\
  !*** ./src/app/take-away-home/take-away-home.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table\r\n{\r\nfont-size: 12px;\r\n} \r\nbutton, input, optgroup, select, textarea {\r\n    /* margin: 0; */\r\n     font-family: Arial, Helvetica, sans-serif!important; \r\n    /* font-size: inherit; */\r\n     line-height: inherit; \r\n    font-size: 13.3333px !important;\r\n    font-family: Arial !important;\r\n    color: black;\r\n} \r\nbutton{\r\n    padding:6px;\r\n    background-color: #ee801f;\r\n    color: black;\r\n  } \r\n.containerDiv\r\n{\r\n    margin-left: 5px!important;\r\n    font-family: 'Times New Roman', Times, serif;\r\n} \r\n.pageMargin{\r\n  margin: 10px;\r\n} \r\n*, ::after, ::before{\r\n    box-sizing: content-box !important;\r\n} \r\n.billDiv tr td, .billDiv tr th{\r\n    padding: 0px 10px 0px 9px;\r\n  } \r\n.billDiv div\r\n{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    width: 448px;\r\n    font-size: 10px;\r\n} \r\n.billDiv div:nth(1)\r\n{\r\n    text-align: left;\r\n} \r\n.billDiv th:nth(1)\r\n{\r\n    width:30px;\r\n} \r\n.billDiv td:nth(2){\r\n    TEXT-align: left;\r\n} \r\n.billDiv th\r\n{\r\n    text-align: left;\r\n} \r\n.billDiv\r\n{\r\n    margin-top: 25px;\r\n    padding-top: 5px;\r\n    width: 99%;\r\n    font-size: 10px;\r\n    border: thin dotted #000;\r\n\r\n} \r\n.row{\r\n    margin-right: 0px;\r\n} \r\n@media print {\r\n  body *{\r\n    visibility: hidden !important;   \r\n    }\r\n   \r\n  }"

/***/ }),

/***/ "./src/app/take-away-home/take-away-home.component.html":
/*!**************************************************************!*\
  !*** ./src/app/take-away-home/take-away-home.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n <div class=\"header\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\"><h3><b>BHADAIT MISAL</b></h3></div>\n    <div class=\"col-sm-6 mt-1\" *ngIf=\"false\">\n      \n      <input [disabled]=\"managerMode || ownerMode || bhukumShopMode\" type=\"password\" [(ngModel)]=\"userPassword\" placeholder=\"Enter Password\">\n      &nbsp;<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userPassword && loginBtnText=='Sign In'\" (click)=\"setAdminMode()\">{{loginBtnText}}</button>\n      &nbsp;<button  *ngIf=\"!this.MainSer.orderMode\" class=\"btn btn-success\" (click)=\"router.navigate(['customerBills'], {});\">Customer Bills</button> \n      &nbsp;<button  *ngIf=\"ownerMode\" class=\"btn btn-success\" (click)=\"clearData()\">Clear Data</button> \n\n<!--        &nbsp;<button class=\"btn btn-success\" (click)=\"router.navigate(['billsMenu'], {});\">Bill Menu</button> \n --> \n    </div>\n  </div>\n</div>\n  <div class=\"containerDiv\" *ngIf=\"!this.MainSer.orderMode && this.items?.length\">\n        \n    <!-- <form [formGroup]=\"billForm\" (ngSubmit)=\"onSubmit()\">\n        <div *ngFor=\"let validation of menuListDetails.menuQty\">\n            <div  *ngIf=\"billForm.get('menuQty').hasError(validation.type) && billForm.get('menuQty').dirty || billForm.get('menuQty').touched\">\n             {{validation.message}}\n            </div>\n        </div> \n          <div *ngFor=\"let validation of menuListDetails.itemList\">\n              <div  *ngIf=\"billForm.get('itemList').hasError(validation.type) && billForm.get('itemList').dirty || billForm.get('itemList').touched\">\n               {{validation.message}}\n              </div>\n          </div> \n          <select  formControlName=\"itemList\">\n              <option value=\"\" disabled>Select</option>\n              <option value=\"{{num}}\" *ngFor=\"let i of items; let num = index\">{{num+1}} {{i.itemname}}</option>\n            \n            </select>\n            <input type=\"number\" formControlName=\"menuQty\"/>\n            <button type=\"submit\">Submit</button>\n      </form> -->\n\n      <div *ngIf=\"orderPlace\">\n        <h4>Your order placed successfully</h4>\n        <h4>Payment ID: {{ paymentId }}</h4>\n        <h4>We will call you once your order is ready</h4>\n       </div>\n\n <div *ngIf=\"!orderPlace\">\n  <b>Select Menu:</b>  &nbsp;\n  <select  [(ngModel)]=\"menuIndex\" tabindex=\"0\" id=\"menu\">\n     <option value=\"\">0 Select Menu</option>\n     <option value=\"{{num}}\" *ngFor=\"let i of items; let num = index\">{{num+1}} {{i.itemname}}</option>\n   <!--  <option value=\"1\">2 Dahi Misal</option>\n     <option value=\"2\">3 Vada Pav</option> -->\n   </select> \n   <br><br><b>Quantity:</b> &nbsp; &nbsp;  &nbsp; &nbsp;\n   <input type=\"number\" [(ngModel)]=\"menuQty\" min=\"1\" (keyup)=\"onKeyup($event)\" (keypress)=\"onKeypress($event)\"/>\n   &nbsp;<button (click)=\"addMenu()\">Add</button> \n </div>\n\n \n \n\n  <div id=\"billDiv\" class=\"billDiv\" *ngIf=\"bill.length\" >\n    <!-- <div><img src=\"./logo.png\" width=\"200px\" height=\"100px\" align=\"center\"/></div> -->\n       <!--  <div *ngIf=\"branchName=='karveroad'\">BHADAIT MISAL<BR>Lane No.14, Prabhat Road, Near Seed<BR>Infotech, Pune-411004</div>  \n        <div  *ngIf=\"branchName=='Bhukum'\">BHADAIT MISAL<BR>Kanta Smruti, Opp. Muktai Lawns<BR>Bhukum, Paud Road, Pune-412108</div>\n -->\n        <!-- <div>BILL NO:{{billno}} DATE: {{latest_date}} TIME: {{latest_time}}</div> -->\n    <table cellpadding=3 >\n        <!-- <tr>\n            <th colspan=\"5\" style='text-align:center'></th>\n            <th></th>\n        </tr> -->\n        <tr>\n          <th align=\"left\" colspan=\"2\" >Name: {{cname | titlecase}}<br> Mo: {{cMobile}}<br></th>\n          <th  colspan=\"3\" style='text-align:right;'>Date: {{latest_date | date:'dd/MM/yyyy'}}<br>Time: {{latest_time}}</th>\n          <th></th>\n        </tr> \n      <tr>\n          <th>No</th>\n          <th >Item Name</th>\n          <th >Qty</th>\n          <th >Rs</th>\n          <th >Amt</th>\n          <th *ngIf=\"!orderPlace\">Action</th>\n      </tr>\n      <tr *ngFor=\"let b of bill; let i = index\">\n           <td>{{i+1}}</td>\n           <td [innerHTML]=\"b.itemname\"></td>\n           <td align=\"right\">{{b.qty}}</td>\n           <td align=\"right\">{{b.price}}</td>\n           <td align=\"right\">{{b.amount}}</td>\n           <td *ngIf=\"!orderPlace\"><button style=\"margin:2px\" (click)=\"removeMenu(i)\">Remove</button></td>\n      </tr>      \n      <tr>\n        <td colspan=\"4\" align=\"left\" style='font-weight:bold;'>Total</td>\n        <td colspan=\"1\"  align=\"right\" style='font-weight:bold;'>Rs.{{totalPrice}}</td>\n        <td></td>\n      </tr>\n      <tr style='font-size:18px' \n       *ngIf=\"spicy || noTarri || tarriSeperate || noOnion || noPohe || packSeperate || noMatki || noPav || noBundi || exOnion || exMatki || mediumRassa || spicyRassa || nonSpicyRassa || exBundi || spNote\">\n        <td style='font-weight:bold;'>Note:</td>\n        <td colspan=\"4\" style=\"width: 300px;font-weight:bold;\">\n          <span *ngIf=\"mediumRassa\">&nbsp; <b>*</b> {{mediumRassa}} M</span>\n          <span *ngIf=\"spicyRassa\">&nbsp; <b>*</b> {{spicyRassa}} S</span>\n          <span *ngIf=\"nonSpicyRassa\">&nbsp; <b>*</b> {{nonSpicyRassa}} NS</span>\n          <span *ngIf=\"spicy\">&nbsp; <b>*</b> Spicy</span>\n          <span *ngIf=\"noTarri\">&nbsp; <b>*</b> No Tarri</span>\n          <span *ngIf=\"tarriSeperate\">&nbsp; <b>*</b> Tarri Seperate</span>\n          <span *ngIf=\"noOnion\">&nbsp; <b>*</b> No Onion</span>\n          <span *ngIf=\"noPohe\">&nbsp; <b>*</b> No Pohe</span>\n          <span *ngIf=\"noMatki\">&nbsp; <b>*</b> No Matki</span>\n          <span *ngIf=\"noPav\">&nbsp; <b>*</b> No Pav</span>\n          <span *ngIf=\"noBundi\">&nbsp; <b>*</b> No Bundi</span>\n          <span *ngIf=\"exOnion\">&nbsp; <b>*</b> Ex Onion</span>\n          <span *ngIf=\"exMatki\">&nbsp; <b>*</b> Ex Matki</span> \n          <span *ngIf=\"packSeperate\">&nbsp; <b>*</b> Pack Seperate</span>\n          <span *ngIf=\"exBundi\">&nbsp; <b>*</b> Ex Bundi</span>\n          <span *ngIf=\"spNote\">&nbsp; <b>*</b> {{spNote}}</span>\n        </td>\n        <td></td>\n      </tr>\n      <tr>\n          <td colspan=\"5\" style='text-align:center;font-weight:bold;'>**THANK YOU**<BR>**VISIT AGAIN**</td>\n            <td></td>\n      </tr>      \n    </table>\n\n    <div *ngIf=\"emp\">\n        <ul>\n          <li *ngFor=\"let e of emp\">{{e.itemno}} {{e.itemname}} {{e.price}}</li>\n        </ul>\n      </div>\n  </div>\n\n  <div style=\"margin-top: 10px;font-weight: bold;\">\n    <span *ngIf=\"bill.length\">\n    <tr>\n      <td>\n        <table class=\"\">\n        <tr *ngIf=\"!orderPlace\">\n          <!-- <td>CN: <input type=\"text\" style=\"width: 50px;\" [(ngModel)]=\"cname\"></td> -->\n\n          <td><b>Instruction:</b></td>\n          <td>Medium <input id=\"mediumRassa\" type=\"number\" style=\"width: 50px;\" [(ngModel)]=\"mediumRassa\" min=\"0\"></td>\n          <td>&nbsp;&nbsp;Spicy <input style=\"width: 50px;\" type=\"number\" [(ngModel)]=\"spicyRassa\"></td>\n          <td>&nbsp;&nbsp;Non Spicy <input type=\"number\" style=\"width: 50px;\" [(ngModel)]=\"nonSpicyRassa\"></td>\n\n        </tr>\n        \n        <tr *ngIf=\"!orderPlace\">\n          <!-- <td><input type=\"checkbox\" value=\"Spicy\" [disabled]=\"noTarri\" [(ngModel)]=\"spicy\"/> 1. Spicy&nbsp;&nbsp;&nbsp;</td> -->\n<!--           <td><input type=\"checkbox\" value=\"Non Spicy\" [disabled]=\"spicy || tarriSeperate\" [(ngModel)]=\"noTarri\"/> 2. No Tarri&nbsp;&nbsp;</td>\n -->          <td><input type=\"checkbox\" value=\"Tarri Seperate\" [disabled]=\"noTarri\" [(ngModel)]=\"tarriSeperate\"/> Tarri Sep.&nbsp;&nbsp;</td>\n              <td><input type=\"checkbox\" value=\"Pack Seperate\" [(ngModel)]=\"packSeperate\"/> Pack Seperate&nbsp;&nbsp;</td>\n              <td colspan=\"3\"><input style=\"width: 120px;\" type=\"text\" [(ngModel)]=\"spNote\" placeholder=\"Add Special Note\"/></td>\n\n          <!-- <td><input type=\"checkbox\" value=\"No Onion\" [disabled]=\"exOnion\" [(ngModel)]=\"noOnion\"/> 4. No Onion&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"No Matki\" [disabled]=\"exMatki\" [(ngModel)]=\"noMatki\"/> 5. No Matki&nbsp;&nbsp;</td> -->\n        </tr>\n        <tr>\n          <!-- <td><input type=\"checkbox\" value=\"No Pav\" [disabled]=\"\" [(ngModel)]=\"noPav\"/> 6. No Pav&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"No Bundi\" [disabled]=\"exBundi\" [(ngModel)]=\"noBundi\"/> 7. No Bundi&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Ex Onion\" [disabled]=\"noOnion\" [(ngModel)]=\"exOnion\"/> 8. Ex Onion&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Ex Matki\" [disabled]=\"noMatki\" [(ngModel)]=\"exMatki\"/> 9. Ex Matki&nbsp;&nbsp;</td> -->\n          \n        </tr>\n        <tr>\n         <!--  <td><input type=\"checkbox\" value=\"No Pohe\" [disabled]=\"\" [(ngModel)]=\"noPohe\"/> 11. No Pohe&nbsp;&nbsp;</td>\n          <td><input type=\"checkbox\" value=\"Ex Bundi\" [disabled]=\"noBundi\" [(ngModel)]=\"exBundi\"/> 11. Ex Bundi&nbsp;&nbsp;</td> -->\n        </tr>\n      </table>\n       <br>\n      </td>\n    </tr>\n    <div *ngIf=\"!orderPlace\">\n        <span>Customer Full Name: &nbsp;<input type=\"text\"  style=\"width: 170px;\" [(ngModel)]=\"cname\"></span>\n        <br><br><span>Mobile No: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <input type=\"number\"  minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"cMobile\"></span>\n          <br><br><button  (click)=\"payNow()\">Pay & Place Order</button>\n\n    </div>\n   \n   \n      \n  </span>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/take-away-home/take-away-home.component.ts":
/*!************************************************************!*\
  !*** ./src/app/take-away-home/take-away-home.component.ts ***!
  \************************************************************/
/*! exports provided: TakeAwayHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeAwayHomeComponent", function() { return TakeAwayHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TakeAwayHomeComponent = /** @class */ (function () {
    function TakeAwayHomeComponent(http, datepipe, MainSer, router, cdr) {
        var _this = this;
        this.http = http;
        this.datepipe = datepipe;
        this.MainSer = MainSer;
        this.router = router;
        this.cdr = cdr;
        this.orderPlace = false;
        this.bill = [];
        this.menuIndex = "0";
        this.menuQty = 1;
        this.totalPrice = 0;
        this.todayDate = new Date();
        this.spicy = false;
        this.noTarri = false;
        this.tarriSeperate = false;
        this.noOnion = false;
        this.noPohe = false;
        this.noMatki = false;
        this.noPav = false;
        this.noBundi = false;
        this.exOnion = false;
        this.exMatki = false;
        this.packSeperate = false;
        this.exBundi = false;
        this.spNote = "";
        this.mediumRassa = 0;
        this.spicyRassa = 0;
        this.nonSpicyRassa = 0;
        this.cname = "";
        this.cMobile = null;
        this.loginBtnText = "Sign In";
        this.managerMode = false;
        this.ownerMode = false;
        this.bhukumShopMode = false;
        this.userPassword = "";
        this.cNote = "";
        this.branchName = this.MainSer.getbranchName();
        this.MainSer.customerOrderMode = true;
        // console.log("----------"+this.items?.length);
        if (this.MainSer.autoIP == true) {
            this.MainSer.IPAddress = window.location.hostname;
            this.MainSer.getItemsData().subscribe(function (resp) { return _this.items = resp; });
        }
        else {
            this.MainSer.IPAddress = this.MainSer.staticIPAddress;
            this.MainSer.getItemsData().subscribe(function (resp) { return _this.items = resp; });
        }
        this.subscription1 = this.MainSer.mangerMode.subscribe(function (value) {
            _this.managerMode = value;
            if (_this.managerMode)
                _this.loginBtnText = "Sign Out";
        });
        this.subscription2 = this.MainSer.ownerMode.subscribe(function (value) {
            _this.ownerMode = value;
            if (_this.ownerMode)
                _this.loginBtnText = "Sign Out";
        });
        this.subscription3 = this.MainSer.bhukumShopMode.subscribe(function (value) {
            _this.bhukumShopMode = value;
            if (_this.bhukumShopMode)
                _this.loginBtnText = "Sign Out";
        });
    }
    //*************** */
    TakeAwayHomeComponent.prototype.payNow = function () {
        var _this = this;
        if (this.cname == null || this.cname.trim().length == 0) {
            alert("Please enter customer name");
            return 0;
        }
        if (this.cMobile == null || this.cMobile.toString().length != 10) {
            alert("Please correct mobile number");
            return 0;
        }
        var RozarpayOptions = {
            description: 'Sample Razorpay demo',
            currency: 'INR',
            amount: this.totalPrice * 100,
            name: 'Bhadait Misal',
            key: 'rzp_test_S6wzGzGXHWEmHW',
            handler: function (response) {
                // Handle success response here
                console.log(response.razorpay_payment_id);
                _this.paymentId = response.razorpay_payment_id;
                _this.orderPlace = true;
                _this.printBill();
                _this.cdr.detectChanges();
                // console.log(response.razorpay_order_id); // Should now work
                //console.log(response.razorpay_signature); // Should now work
                // Call your backend API to verify the payment signature
            },
            prefill: {
                name: this.cname,
                email: 'rohitbhadait@gmail.com',
                phone: this.cMobile
            },
            theme: {
                color: '#FFA500'
            },
            modal: {
                ondismiss: function () {
                    console.log('dismissed');
                }
            }
        };
        /*  const successCallback = (paymentid: any) => {
           console.log(paymentid);
           this.paymentId = paymentid
           alert("Your order placed successfully");
           this.orderPlace = true;
           this.printBill()
         }
       
         const failureCallback = (e: any) => {
           alert("Please do payment");
           console.log(e);
           this.orderPlace = false;
         } */
        Razorpay.open(RozarpayOptions);
    };
    /*billForm = new FormGroup({
      itemList: new FormControl('', Validators.compose([
        Validators.required
      ])),
      menuQty: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ]))
    })
   
   
    menuListDetails = {
      'itemList': [
        {type: 'required', message: 'Please Select Item Name'}
      ],
      'menuQty': [
        {type: 'required', message: 'Please Enter Quantity'}
      ]
    }
    onSubmit()
    {
      console.log(this.billForm.value)
    }*/
    TakeAwayHomeComponent.prototype.addMenu = function () {
        if (this.menuIndex != "" && this.menuQty > 0) {
            this.todayDate = new Date();
            this.latest_date = this.datepipe.transform(this.todayDate, 'MM-dd-yyyy');
            this.latest_time = this.datepipe.transform(this.todayDate, 'shortTime');
            this.amt = parseInt(this.items[this.menuIndex].price) * (this.menuQty);
            this.bill.push({ "itemno": this.menuIndex, "itemname": this.items[this.menuIndex].itemname, "price": this.items[this.menuIndex].price, "qty": this.menuQty, "amount": this.amt });
            this.totalPrice += this.amt;
            this.menuIndex = "0";
            //   document.getElementById("menu").focus();
            this.menuQty = 1;
        }
    };
    TakeAwayHomeComponent.prototype.removeMenu = function (index) {
        //console.log(index);
        // this.amt=parseInt(this.bill[index].qty)*parseInt(this.bill[index].price)
        this.totalPrice -= parseInt(this.bill[index].qty) * parseInt(this.bill[index].price);
        this.bill.splice(index, 1);
        // document.getElementById("menu").focus();
        if (this.bill.length == 0) {
            this.resetBillsVaribale(false);
        }
    };
    TakeAwayHomeComponent.prototype.getCNote = function () {
        this.cNote = "";
        if (this.mediumRassa)
            this.cNote += "<b>*</b>" + this.mediumRassa + " M";
        if (this.spicyRassa)
            this.cNote += "&nbsp; <b>*</b>" + this.spicyRassa + " S";
        if (this.nonSpicyRassa)
            this.cNote += "&nbsp; <b>*</b>" + this.nonSpicyRassa + " NS";
        if (this.spicy)
            this.cNote += "&nbsp; <b>*</b> Spicy";
        if (this.noTarri)
            this.cNote += "&nbsp; <b>*</b> No Tarri";
        if (this.tarriSeperate)
            this.cNote += "&nbsp; <b>*</b> Tarri Seperate";
        if (this.noOnion)
            this.cNote += "&nbsp; <b>*</b> No Onion";
        if (this.noPohe)
            this.cNote += "&nbsp; <b>*</b> No Pohe";
        if (this.noMatki)
            this.cNote += "&nbsp; <b>*</b> No Matki";
        if (this.noPav)
            this.cNote += "&nbsp; <b>*</b> No Pav";
        if (this.noBundi)
            this.cNote += "&nbsp; <b>*</b> No Bundi";
        if (this.exOnion)
            this.cNote += "&nbsp; <b>*</b> Ex Onion";
        if (this.exMatki)
            this.cNote += "&nbsp; <b>*</b> Ex Matki";
        if (this.packSeperate)
            this.cNote += "&nbsp; <b>*</b> Pack Seperate";
        if (this.exBundi)
            this.cNote += "&nbsp; <b>*</b> Ex Bundi";
        if (this.spNote)
            this.cNote += "&nbsp; <b>*</b> " + this.spNote;
    };
    TakeAwayHomeComponent.prototype.addBill = function () {
        var _this = this;
        this.getCNote();
        var _loop_1 = function (i) {
            json = JSON.stringify({ itemno: parseInt(this_1.bill[i].itemno) + 1, qty: this_1.bill[i].qty, billno: this_1.billno, date: this_1.latest_date, time: this_1.latest_time, cname: this_1.cname, note: this_1.cNote, foodstatus: 'preparing', tableno: 500, mobileno: this_1.cMobile, billstatus: '', waitername: '', preparedBy: '' });
            header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            header.append("Content-Type", "application/json");
            this_1.http.post(this_1.MainSer.IPAddress + "/api/add", json, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                // console.log("success"+res);
                /* if(i==this.bill.length-1)
                  this.printBillSuccess(); */
            }, function (error) {
                if (i == _this.bill.length - 1)
                    alert("Please Check Command Promt");
            });
        };
        var this_1 = this, json, header;
        for (var i = 0; i < this.bill.length; i++) {
            _loop_1(i);
        }
    };
    TakeAwayHomeComponent.prototype.printBillSuccess = function () {
        this.billno++;
        window.print();
        this.bill = []; //.splice(0,this.bill.length);
        this.totalPrice = 0;
        this.copyMessage(this.cname);
        this.resetBillsVaribale(false);
        //document.getElementById("menu").focus();
    };
    TakeAwayHomeComponent.prototype.printBill = function () {
        if (this.bill.length) {
            //this.cname =this.cname.replace("+", "");
            // this.addBill()
            //Adding bill once bill no is generated
            this.getBillNo();
            /* var mywindow = window.open('', 'PRINT', 'height=400,width=600');
        
             mywindow.document.write('<html>');
             mywindow.document.write('<body>');
             //mywindow.document.write('<h1>' + document.title  + '</h1>');
             mywindow.document.write(document.getElementById('billDiv').innerHTML);
             mywindow.document.write('</body></html>');
        
             mywindow.document.close(); // necessary for IE >= 10
             mywindow.focus(); // necessary for IE >= 10
        
             mywindow.print();
             mywindow.close();
        
             return true;*/
        }
    };
    TakeAwayHomeComponent.prototype.resetBillsVaribale = function (flag) {
        this.spicy = flag;
        this.noTarri = flag;
        this.tarriSeperate = flag;
        this.noOnion = flag;
        this.noPohe = flag;
        this.noMatki = flag;
        this.noPav = flag;
        this.noBundi = flag;
        this.exOnion = flag;
        this.exMatki = flag;
        this.packSeperate = flag;
        this.exBundi = flag;
        this.spNote = "";
        this.mediumRassa = 0;
        this.spicyRassa = 0;
        this.nonSpicyRassa = 0;
        this.cname = "";
        this.cMobile = null;
    };
    TakeAwayHomeComponent.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        //selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    TakeAwayHomeComponent.prototype.getItemsData = function () {
        var _this = this;
        if (localStorage.getItem('menu') == null) {
            this.http.get(this.MainSer.IPAddress + "/api/GetItemsData")
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) { return _this.items = resp; });
        }
        else {
            this.items = JSON.parse(localStorage.getItem('menu'));
        }
    };
    TakeAwayHomeComponent.prototype.getBillNo = function () {
        var _this = this;
        this.todayDate = new Date();
        this.latest_date = this.datepipe.transform(this.todayDate, 'MM-dd-yyyy');
        this.latest_time = this.datepipe.transform(this.todayDate, 'shortTime');
        this.http.get(this.MainSer.IPAddress + "/api/billno?date=" + this.latest_date)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.billno = resp;
            //this.setBillNo()
            // console.log(this.billno)
            if (_this.billno != "")
                _this.billno = _this.billno[0].billno + 1;
            else
                _this.billno = 1;
            _this.addBill();
        });
    };
    TakeAwayHomeComponent.prototype.noteCheckboxClick = function (chkBoxName) {
        if (chkBoxName == "spicy") {
            if (this.spicy == true)
                this.spicy = false;
            else
                this.spicy = true;
        }
        if (chkBoxName == "noTarri") {
            if (this.noTarri == true)
                this.noTarri = false;
            else
                this.noTarri = true;
        }
        if (chkBoxName == "tarriSeperate") {
            if (this.tarriSeperate == true)
                this.tarriSeperate = false;
            else
                this.tarriSeperate = true;
        }
        if (chkBoxName == "noOnion") {
            if (this.noOnion == true)
                this.noOnion = false;
            else
                this.noOnion = true;
        }
        if (chkBoxName == "noPohe") {
            if (this.noPohe == true)
                this.noPohe = false;
            else
                this.noPohe = true;
        }
        if (chkBoxName == "noMatki") {
            if (this.noMatki == true)
                this.noMatki = false;
            else
                this.noMatki = true;
        }
        if (chkBoxName == "noPav") {
            if (this.noPav == true)
                this.noPav = false;
            else
                this.noPav = true;
        }
        if (chkBoxName == "noBundi") {
            if (this.noBundi == true)
                this.noBundi = false;
            else
                this.noBundi = true;
        }
        if (chkBoxName == "exOnion") {
            if (this.exOnion == true)
                this.exOnion = false;
            else
                this.exOnion = true;
        }
        if (chkBoxName == "exMatki") {
            if (this.exMatki == true)
                this.exMatki = false;
            else
                this.exMatki = true;
        }
        if (chkBoxName == "packSeperate") {
            if (this.packSeperate == true)
                this.packSeperate = false;
            else
                this.packSeperate = true;
        }
        if (chkBoxName == "exBundi") {
            if (this.exBundi == true)
                this.exBundi = false;
            else
                this.exBundi = true;
        }
    };
    TakeAwayHomeComponent.prototype.setAdminMode = function () {
        if (this.loginBtnText == "Sign In") {
            if (this.userPassword == "!moze#321") {
                this.MainSer.setLoginMode("manager", true);
                this.sendDB_BackupMail();
            }
            else if (this.userPassword == "bhadait@3210") {
                this.MainSer.setLoginMode("owner", true);
                this.sendDB_BackupMail();
            }
            else if (this.userPassword == "!tiruAvi#321") {
                this.MainSer.setLoginMode("bhukumShop", true);
                this.sendDB_BackupMail();
            }
            else if (this.userPassword == "kitchen") { //kitchen
                this.router.navigate(['kitchenOrders'], {});
            }
            else if (this.userPassword == "takeorder") { //take order
                this.router.navigate(['selectTable'], {});
                this.MainSer.waiterMode = true;
            }
            else {
                if (this.bhukumShopMode == true)
                    alert("Wrong Password!");
                else {
                    if (this.userPassword != "bhadait@3210") {
                        this.MainSer.setLoginMode("manager", true);
                        this.sendDB_BackupMail();
                    }
                }
            }
        }
        else {
            if (!this.MainSer.getLoginMode('owner').value) {
                this.loginBtnText = "Sign In";
                this.userPassword = "";
                this.MainSer.setLoginMode("manager", false);
                this.MainSer.setLoginMode("owner", false);
                this.MainSer.setLoginMode("bhukumShop", false);
            }
        }
    };
    TakeAwayHomeComponent.prototype.sendDB_BackupMail = function () {
        this.MainSer.orderMode = false;
        /* let onlineOffline: boolean = navigator.onLine;
       
          if(onlineOffline==true){
            this.http.get("http://localhost:3000/api/sendDB_BackupMail?branch="+this.branchName)
            .map(res=>res)
            .subscribe(resp=>{
              console.log("DB Backup Mail Sent..");
            });
          }
          else{
            alert("Check Your Internet Connection!")
          }  */
    };
    TakeAwayHomeComponent.prototype.ngOnInit = function () {
        // this.MainSer.setLoginMode("manager",false);
        // this.MainSer.setLoginMode("owner",false);
        if (this.bhukumShopMode == false) {
            this.MainSer.setLoginMode("manager", true);
            this.sendDB_BackupMail();
            //alert(this.bhukumShopMode);
        }
        this.setAdminMode();
    };
    TakeAwayHomeComponent.prototype.ngOnDestroy = function () {
        if (this.subscription1)
            this.subscription1.unsubscribe();
        if (this.subscription2)
            this.subscription2.unsubscribe();
        if (this.subscription3)
            this.subscription3.unsubscribe();
    };
    /* @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
      //console.log(event.keyCode);
      if(event.keyCode==107)
      {
        this.printBill()
      }
      //32)
      if(event.keyCode==192)
      {
        document.getElementById("menu").focus();
        this.menuIndex="0"
        this.menuQty=1
      }
   
      if(event.keyCode==109)
      {
        document.getElementById("mediumRassa").focus();
      }
   
   
      if(event.keyCode==49 && !this.noTarri)
        this.noteCheckboxClick("spicy");
   
      if(event.keyCode==50 && !this.spicy)
        this.noteCheckboxClick("noTarri");
   
      if(event.keyCode==51 && !this.noTarri)
        this.noteCheckboxClick("tarriSeperate");
   
      if(event.keyCode==52 && !this.exOnion)
        this.noteCheckboxClick("noOnion");
   
      if(event.keyCode==189)
        this.noteCheckboxClick("noPohe");
   
      if(event.keyCode==53 && !this.exMatki)
        this.noteCheckboxClick("noMatki");
   
      if(event.keyCode==54)
        this.noteCheckboxClick("noPav");
   
      if(event.keyCode==55 && !this.exBundi)
        this.noteCheckboxClick("noBundi");
   
      if(event.keyCode==187 && !this.noBundi)
        this.noteCheckboxClick("exBundi");
   
      if(event.keyCode==56 && !this.noOnion)
        this.noteCheckboxClick("exOnion");
      
      if(event.keyCode==57 && !this.noMatki)
        this.noteCheckboxClick("exMatki");
   
      if(event.keyCode==48)
        this.noteCheckboxClick("packSeperate");
    }
    onKeyup(event){
      if (event.keyCode === 13) {
        this.addMenu()
      }
    } */
    TakeAwayHomeComponent.prototype.onKeypress = function (event) {
        var pattern = /[0-9\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    TakeAwayHomeComponent.prototype.clearData = function () {
        var _this = this;
        if (window.confirm('Are sure you want to clear DATA?')) {
            this.todayDate = new Date();
            this.latest_date = this.datepipe.transform(this.todayDate, 'MM-dd-yyyy');
            var json = JSON.stringify({ date: this.latest_date });
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            header.append("Content-Type", "application/json");
            this.http.post(this.MainSer.IPAddress + "/api/clearBills", json, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                alert("Deleted " + res + " rows - Please wait deleting pending orders.");
                _this.deletePendingOrderData();
            }, function (error) {
                alert("Please Check Command Promt");
            });
        }
    };
    TakeAwayHomeComponent.prototype.deletePendingOrderData = function () {
        this.todayDate = new Date();
        this.latest_date = this.datepipe.transform(this.todayDate, 'yyyy-MM-dd');
        var json = JSON.stringify({ date: this.latest_date });
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        header.append("Content-Type", "application/json");
        this.http.post(this.MainSer.IPAddress + "/api/clearPendingOrder", json, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            alert("Deleted " + res + " rows. Thanks for your patience.");
        }, function (error) {
            alert("Please Check Command Promt");
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TakeAwayHomeComponent.prototype, "latest_date", void 0);
    TakeAwayHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-take-away-home',
            template: __webpack_require__(/*! ./take-away-home.component.html */ "./src/app/take-away-home/take-away-home.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
            styles: [__webpack_require__(/*! ./take-away-home.component.css */ "./src/app/take-away-home/take-away-home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], TakeAwayHomeComponent);
    return TakeAwayHomeComponent;
}());



/***/ }),

/***/ "./src/app/vendor/add-vendor/add-vendor.component.css":
/*!************************************************************!*\
  !*** ./src/app/vendor/add-vendor/add-vendor.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/vendor/add-vendor/add-vendor.component.html":
/*!*************************************************************!*\
  !*** ./src/app/vendor/add-vendor/add-vendor.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3 *ngIf=\"!editObj\">Add Vendor</h3>\n  <h3 *ngIf=\"editObj\">Edit Vendor</h3>\n</div>\n<div class=\"containerDiv\">\n  <div >\n    <form [formGroup]=\"addVendorForm\" (ngSubmit)=\"addVendor()\" >\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2\">Name:</label>\n          <div class=\"col-sm-3\">\n            <input type=\"text\" formControlName=\"vName\" class=\"form-control-plaintext border\"/>\n            <div *ngFor=\"let validation of VendorFormDetails.vName\">\n              <div class=\"invalid-feedback\" *ngIf=\"addVendorForm.get('vName').hasError(validation.type) && addVendorForm.get('vName').touched\">\n              {{validation.message}}</div>\n            </div>        \n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Address</label>\n          <div class=\"col-sm-3\">\n              <textarea row=\"3\" formControlName=\"vAdd\" class=\"form-control-plaintext border\"></textarea>\n              <div *ngFor=\"let validation of VendorFormDetails.vAdd\">\n                <div class=\"invalid-feedback\" *ngIf=\"addVendorForm.get('vAdd').hasError(validation.type) && addVendorForm.get('vAdd').touched\">{{validation.message}}</div></div>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2\">Mobile No:</label>\n          <div class=\"col-sm-3\">\n            <input type=\"number\" formControlName=\"mobileNo\" class=\"form-control-plaintext border\" max=\"10\" min=\"10\"/>\n            <div *ngFor=\"let validation of VendorFormDetails.mobileNo\">\n              <div class=\"invalid-feedback\" *ngIf=\"addVendorForm.get('mobileNo').hasError(validation.type) && addVendorForm.get('mobileNo').touched\">\n              {{validation.message}}</div>\n            </div>        \n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2\">Product Name:</label>\n          <div class=\"col-sm-3\">\n            <input type=\"text\" formControlName=\"vProductName\" class=\"form-control-plaintext border\"/>\n            <div *ngFor=\"let validation of VendorFormDetails.vProductName\">\n              <div class=\"invalid-feedback\" *ngIf=\"addVendorForm.get('vProductName').hasError(validation.type) && addVendorForm.get('vProductName').touched\">\n              {{validation.message}}</div>\n            </div>        \n          </div>\n        </div>\n\n        <div class=\"form-group row ml-1\">\n          <button type=\"submit\" class=\"btn btn-primary border\"  [disabled]=\"!addVendorForm.valid\"  *ngIf=\"!editMode\">Add</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"updateVendorData()\"  *ngIf=\"editMode\" [disabled]=\"!addVendorForm.valid\">Update</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"cancelAdd()\">Cancel</button> \n        </div>\n      </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/vendor/add-vendor/add-vendor.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/vendor/add-vendor/add-vendor.component.ts ***!
  \***********************************************************/
/*! exports provided: AddVendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVendorComponent", function() { return AddVendorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddVendorComponent = /** @class */ (function () {
    function AddVendorComponent(http, route, router, MainSer, datepipe) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.MainSer = MainSer;
        this.datepipe = datepipe;
        this.addVendorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            vName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            vAdd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            vProductName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]))
        });
        this.VendorFormDetails = {
            'vName': [{ type: 'required', message: 'Name is required' }],
            'vAdd': [{ type: 'required', message: 'Address is required' }],
            'mobileNo': [{ type: 'required', message: 'Mobile No is required' }],
            'vProductName': [{ type: 'required', message: 'Product Name is required' }]
        };
        this.editMode = false;
    }
    AddVendorComponent.prototype.addVendor = function () {
        var _this = this;
        if (!this.editMode) {
            console.log("addVendor ");
            var json = JSON.stringify({ vName: this.addVendorForm.value.vName, vAdd: this.addVendorForm.value.vAdd, mobileNo: this.addVendorForm.value.mobileNo, vProductName: this.addVendorForm.value.vProductName });
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            header.append("Content-Type", "application/json");
            this.http.post("http://localhost:3000/api/addVendor", json, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) {
                alert("Vendor Added Successfully!");
                _this.router.navigate(['vendors'], {});
            });
            this.addVendorForm.reset();
        }
    };
    AddVendorComponent.prototype.cancelAdd = function () {
        this.router.navigate(['vendors'], {});
    };
    AddVendorComponent.prototype.updateVendorData = function () {
        var _this = this;
        console.log("updateVendorData-- " + this.editObj.vID);
        var json = JSON.stringify({ vID: this.editObj.vID, vName: this.addVendorForm.value.vName, vAdd: this.addVendorForm.value.vAdd, mobileNo: this.addVendorForm.value.mobileNo, vProductName: this.addVendorForm.value.vProductName });
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append("Content-Type", "application/json");
        this.http.post("http://localhost:3000/api/updateVendor", json, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            alert("Record Updated!");
            _this.router.navigate(['vendors'], {});
        });
    };
    AddVendorComponent.prototype.ngOnInit = function () {
        if (this.MainSer.getEditMode()) {
            this.editMode = true;
            this.editObj = this.MainSer.getEditObj();
            this.addVendorForm.controls['vName'].setValue(this.editObj.vName);
            this.addVendorForm.controls['vAdd'].setValue(this.editObj.vAdd);
            this.addVendorForm.controls['mobileNo'].setValue(this.editObj.mobileNo);
            this.addVendorForm.controls['vProductName'].setValue(this.editObj.vProductName);
        }
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
    };
    AddVendorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-vendor',
            template: __webpack_require__(/*! ./add-vendor.component.html */ "./src/app/vendor/add-vendor/add-vendor.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            styles: [__webpack_require__(/*! ./add-vendor.component.css */ "./src/app/vendor/add-vendor/add-vendor.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], AddVendorComponent);
    return AddVendorComponent;
}());



/***/ }),

/***/ "./src/app/vendor/search-vendor-bill/search-vendor-bill.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/vendor/search-vendor-bill/search-vendor-bill.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/vendor/search-vendor-bill/search-vendor-bill.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/vendor/search-vendor-bill/search-vendor-bill.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3>Search Vendor Bills</h3>\n</div>\n<div class=\"containerDiv\">\n  \n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label bold\">Select Vendor Name</label>\n    <div class=\"col-sm-2\">\n      <select class=\"form-control-plaintext  border\" [(ngModel)]=\"nameIndex\">            \n        <option value=\"\" disabled>Select Name</option>\n        <option  *ngFor=\"let i of vendorData; let num = index\">{{num+1}} . {{i.vName}}</option>\n      </select>   \n    </div>\n    <div  class=\"col-sm-1\">\n      <button (click)=\"fGetLastNilBalanceRecord()\" class=\"btn btn-primary\" [disabled]=\"!nameIndex\">Submit</button>\n    </div>\n    \n  </div>\n  \n  <div  class=\"row\" *ngIf=\"searchData\">\n    \n    <table class=\"table table-bordered col-sm-8\">\n        <tr>\n          <th>Name</th>\n          <th>Cash Bills</th>\n          <th>Add Bills</th>\n          <th>Paid Bills</th>\n          <th>Total Due</th>\n          \n        </tr>\n        <tr>\n          <td>{{lastSelectedName}}</td>\n          <td>{{cashBills}}</td>\n          <td>{{addAmount}}</td>\n          <td>{{paidAmount}}</td>\n          <td>{{addAmount - paidAmount}}</td>\n        </tr>\n    </table>\n\n    <div>\n      <b>Select Date: &nbsp; </b>\n      <b>From </b> <input type=\"date\" [(ngModel)]=\"inputStartDate\" [max]=\"todaySysDate\"/>&nbsp;\n      <b>To </b> <input type=\"date\" [(ngModel)]=\"inputEndDate\" [max]=\"todaySysDate\"/>&nbsp;\n      <button class=\"btn btn-primary\" (click)=\"getBillsReport('manual')\" [disabled]=\"!inputStartDate || !inputEndDate\">Submit</button>\n       <br><br>\n    </div>\n\n    <div class=\"col-sm-12 row\"  *ngIf=\"searchData.length\">\n      <h5 *ngIf=\"type == 'manual'\"><b>Report From:</b> {{startDate}} <b>To:</b> {{endDate}}</h5>\n      <h5 *ngIf=\"type != 'manual'\"><b>Vendor Payment Due Report:</b></h5>\n\n\n<!--       <div class=\"col-sm-12 row\">Search : &nbsp; <input  [(ngModel)]=\"searchString\"></div><br>\n -->      <table class=\"table table-bordered mt-1\">\n        <tr>\n          <th>Sr.No</th>\n          <th>Date</th>\n          <th>Type</th>\n          <th>Amount</th>\n          <th>Balance</th>\n          <th>Note</th>\n        </tr>     \n\n\n        <tr  *ngFor=\"let v of searchData | filter : 'tranType' : searchString;let i = index;trackBy: trackChatMessage\">\n          <td>{{i+1}}</td>\n          <td>{{v.tranDate  | date:'dd/MM/yyyy'}}</td>\n          <td>{{v.tranType}}</td>\n          <td>{{getAmountNCalcTotal(v.amount)}}</td>\n          <td>{{v.balance}}</td>\n          <td>{{v.note}}</td>\n<!--           <td><button (click)=\"editVendorBill(v)\" class=\"btn btn-primary\">Edit</button></td>\n -->        </tr>\n        <!-- <tr>\n          <td colspan=\"3\"><b>Total</b></td>\n          <td colspan=\"2\">Error: {{totalAmt}}</td>\n        </tr> -->\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/vendor/search-vendor-bill/search-vendor-bill.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/vendor/search-vendor-bill/search-vendor-bill.component.ts ***!
  \***************************************************************************/
/*! exports provided: SearchVendorBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchVendorBillComponent", function() { return SearchVendorBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchVendorBillComponent = /** @class */ (function () {
    function SearchVendorBillComponent(http, cdref, datepipe, MainSer, router) {
        this.http = http;
        this.cdref = cdref;
        this.datepipe = datepipe;
        this.MainSer = MainSer;
        this.router = router;
        this.nameIndex = "";
        this.paidAmount = 0;
        this.addAmount = 0;
        this.cashBills = 0;
        this.lastSelectedName = "";
        this.totalAmt = 0;
        this.balanceZeroNotFound = false;
        this.cdref.detach();
    }
    SearchVendorBillComponent.prototype.getEmployeesName = function () {
        var _this = this;
        this.http.get("http://localhost:3000/api/getVendorData")
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) { return _this.vendorData = resp; });
    };
    SearchVendorBillComponent.prototype.getBillsReport = function (type) {
        var _this = this;
        if (type == "auto") {
            var tmpTodaysDate = new Date();
            this.endDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
            tmpTodaysDate.setDate(tmpTodaysDate.getDate() - 30);
            this.startDate = this.datepipe.transform(tmpTodaysDate, 'yyyy-MM-dd');
            this.inputEndDate = "";
            this.inputStartDate = "";
        }
        else {
            this.endDate = this.datepipe.transform(this.inputEndDate, 'yyyy-MM-dd');
            this.startDate = this.datepipe.transform(this.inputStartDate, 'yyyy-MM-dd');
            this.type = type;
        }
        this.lastSelectedName = this.nameIndex;
        this.nameIndexSplit = this.nameIndex.split(' ');
        var tmpeName = this.nameIndexSplit[0];
        var index = parseInt(tmpeName);
        this.http.get("http://localhost:3000/api/searchVendorBills?vID=" + this.vendorData[index - 1].vID + "&startDate=" + this.startDate + "&endDate=" + this.endDate)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.searchData = resp;
            if (_this.searchData.length == 0)
                alert("No Data Found!");
            _this.calculateAdvance();
        });
    };
    SearchVendorBillComponent.prototype.calculateAdvance = function () {
        this.paidAmount = 0;
        this.addAmount = 0;
        this.cashBills = 0;
        var minusNo = 0;
        if (this.type != "manual" && !this.balanceZeroNotFound)
            minusNo = 1;
        for (var i = 0; i < this.searchData.length - minusNo; i++) {
            if (this.searchData[i].tranType == "Paid")
                this.paidAmount += this.searchData[i].amount;
            else if (this.searchData[i].tranType == "Add")
                this.addAmount += this.searchData[i].amount;
            else if (this.searchData[i].tranType == "Cash")
                this.cashBills += this.searchData[i].amount;
        }
    };
    SearchVendorBillComponent.prototype.getAmountNCalcTotal = function (amt) {
        this.totalAmt += amt;
        return amt;
    };
    SearchVendorBillComponent.prototype.editVendorBill = function (vendorBillObj) {
        this.MainSer.setEditMode(true);
        this.MainSer.setEditObj(vendorBillObj);
        this.router.navigate(['vendorAddPaidBill'], {});
    };
    SearchVendorBillComponent.prototype.fGetLastNilBalanceRecord = function () {
        var _this = this;
        this.type = "auto";
        this.lastSelectedName = this.nameIndex;
        this.nameIndexSplit = this.nameIndex.split(' ');
        var tmpeName = this.nameIndexSplit[0];
        var index = parseInt(tmpeName);
        this.http.get("http://localhost:3000/api/getVendorLastNilBalRecord?vID=" + this.vendorData[index - 1].vID)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            if (resp.length != 0) {
                _this.balanceZeroNotFound = false;
                _this.lastNilBalRecord = resp[0];
                _this.fGetDueRecord();
            }
            else {
                _this.balanceZeroNotFound = true;
                _this.http.get("http://localhost:3000/api/getVendorLastNilBalRecordBalZeroNotFound?vID=" + _this.vendorData[index - 1].vID)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (resp) {
                    if (resp.length != 0) {
                        _this.lastNilBalRecord = resp[0];
                        _this.fGetDueRecord();
                    }
                    else {
                        _this.searchData = resp;
                        _this.calculateAdvance();
                        alert("No Record Found!");
                    }
                });
            }
        });
    };
    SearchVendorBillComponent.prototype.fGetDueRecord = function () {
        var _this = this;
        this.http.get("http://localhost:3000/api/getVendorDueRecords?vID=" + this.lastNilBalRecord.vID + "&id=" + this.lastNilBalRecord.id)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.searchData = resp;
            _this.calculateAdvance();
            if (_this.searchData.length == 0) {
                alert("No Record Found!");
            }
        });
    };
    SearchVendorBillComponent.prototype.ngOnInit = function () {
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
        this.getEmployeesName();
    };
    SearchVendorBillComponent.prototype.ngAfterContentChecked = function () {
        this.cdref.detectChanges();
    };
    SearchVendorBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-vendor-bill',
            template: __webpack_require__(/*! ./search-vendor-bill.component.html */ "./src/app/vendor/search-vendor-bill/search-vendor-bill.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [__webpack_require__(/*! ./search-vendor-bill.component.css */ "./src/app/vendor/search-vendor-bill/search-vendor-bill.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SearchVendorBillComponent);
    return SearchVendorBillComponent;
}());



/***/ }),

/***/ "./src/app/vendor/vendor-add-paid-bill/vendor-add-paid-bill.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/vendor/vendor-add-paid-bill/vendor-add-paid-bill.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/vendor/vendor-add-paid-bill/vendor-add-paid-bill.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/vendor/vendor-add-paid-bill/vendor-add-paid-bill.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3></h3>\n  <h3 *ngIf=\"!editMode\">Add Vendor Bill</h3>\n  <h3 *ngIf=\"editMode\">Edit Vendor Bill</h3>\n</div>\n<div class=\"containerDiv\">\n  <div >\n    <form [formGroup]=\"vendorAddBillForm\" (ngSubmit)=\"addVendorBill()\" >\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Transaction Date:</label>\n        <div class=\"col-sm-3\">\n          <input type=\"date\" disabled=\"true\" formControlName=\"tranDate\" class=\"form-control-plaintext border\" [max]=\"todaySysDate\"/>\n          <div *ngFor=\"let validation of vendorAddBillDetails.tranDate\">\n            <div class=\"invalid-feedback\" *ngIf=\"vendorAddBillForm.get('tranDate').hasError(validation.type) && vendorAddBillForm.get('tranDate').touched\">\n            {{validation.message}}</div>\n          </div>        \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Vendor Name</label>\n        <div class=\"col-sm-3\">\n          <select formControlName=\"vName\" class=\"form-control-plaintext  border\" [(ngModel)]=\"empNameIndex\" (change)=\"onChange($event)\">            \n            <option value=\"\" disabled>Select Name</option>\n            <option *ngFor=\"let i of vendorData; let num = index;\" [value]=\"num+1  +' . '+  i.vName\">{{num+1}} . {{i.vName}}</option>\n          </select>\n          <div *ngFor=\"let validation of vendorAddBillDetails.vName\">\n            <div class=\"invalid-feedback\" *ngIf=\"vendorAddBillForm.get('vName').hasError(validation.type) && vendorAddBillForm.get('vName').touched\">\n            {{validation.message}}</div>\n          </div>   \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Transaction Type</label>\n        <div class=\"col-sm-3\">\n          <select formControlName=\"tranType\" class=\"form-control-plaintext  border\">\n            <option value=\"\" disabled>Select Bill Type</option>\n            <option>Add</option>\n            <option>Paid</option>\n            <option>Cash</option>\n          </select>\n          <div *ngFor=\"let validation of vendorAddBillDetails.tranType\">\n            <div class=\"invalid-feedback\" *ngIf=\"vendorAddBillForm.get('tranType').hasError(validation.type) && vendorAddBillForm.get('tranType').touched\">\n            {{validation.message}}</div>\n          </div>             \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Amount</label>\n        <div class=\"col-sm-3\">\n          <input type=\"number\" formControlName=\"tranAmount\" class=\"form-control-plaintext  border\" min=\"1\"/>\n          <div *ngFor=\"let validation of vendorAddBillDetails.tranAmount\">\n            <div class=\"invalid-feedback\" *ngIf=\"vendorAddBillForm.get('tranAmount').hasError(validation.type) && vendorAddBillForm.get('tranAmount').touched\">\n            {{validation.message}}</div>\n          </div>          \n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Note:</label>\n        <div class=\"col-sm-3\">\n          <input type=\"text\" formControlName=\"note\" class=\"form-control-plaintext  border\"/>\n          \n        </div>\n      </div>\n\n        <div class=\"form-group row ml-1\">\n          <button type=\"submit\" class=\"btn btn-primary border\"  [disabled]=\"!vendorAddBillForm.valid\"  *ngIf=\"!editMode\">Add</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"updateVendorData()\"  *ngIf=\"editMode\" [disabled]=\"!vendorAddBillForm.valid\">Update</button>\n          <button  class=\"btn btn-primary ml-1\" (click)=\"cancel()\">Cancel</button> \n        </div>\n      </form>\n    </div>\n\n    <div class=\" row\" *ngIf=\"vendorBillDataObj.length\">\n      <table class=\"table table-bordered col-sm-8\">\n        <tr>\n          <th>Sr. No</th>\n          <th>VName</th>\n          <th>Tran Date</th>\n          <th>Tran Type</th>\n          <th>Amount</th>\n          <th>Balance</th>\n          <th>Note</th>\n        </tr>\n        <tr *ngFor=\"let p of vendorBillDataObj;let i = index;trackBy: trackChatMessage\">\n          <td>{{i+1}}</td>\n          <td>{{getVName(p.vID)}}</td>\n          <td>{{p.tranDate | date:'dd/MM/yyyy'}}</td>\n          <td>{{p.tranType}}</td>\n          <td>{{p.amount}}</td>\n          <td>{{p.balance}}</td>\n          <td>{{p.note}}</td>\n        </tr>\n      </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/vendor/vendor-add-paid-bill/vendor-add-paid-bill.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/vendor/vendor-add-paid-bill/vendor-add-paid-bill.component.ts ***!
  \*******************************************************************************/
/*! exports provided: VendorAddPaidBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorAddPaidBillComponent", function() { return VendorAddPaidBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VendorAddPaidBillComponent = /** @class */ (function () {
    function VendorAddPaidBillComponent(http, route, router, MainSer, datepipe, fb) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.MainSer = MainSer;
        this.datepipe = datepipe;
        this.fb = fb;
        this.vendorAddBillForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            tranDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            vName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            tranType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            tranAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([]))
        });
        this.vendorAddBillDetails = {
            'tranDate': [{ type: 'required', message: 'Field is required' }],
            'vName': [{ type: 'required', message: 'Field is required' }],
            'tranType': [{ type: 'required', message: 'Field is required' }],
            'tranAmount': [{ type: 'required', message: 'Field is required' }]
        };
        this.vendorBillDataObj = [];
        this.empNameIndex = "";
        this.editMode = false;
        this.VendorBillBalance = [];
        this.currentVendorBalance = 0;
    }
    VendorAddPaidBillComponent.prototype.getVendorsName = function () {
        var _this = this;
        this.http.get("http://localhost:3000/api/getVendorData")
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.vendorData = resp;
            if (_this.editMode) {
                _this.setEditData();
            }
        });
    };
    VendorAddPaidBillComponent.prototype.addVendorBill = function () {
        var _this = this;
        if (!this.editMode) {
            var tmpIndex = this.empNameIndex.split(' ');
            var index_1 = parseInt(tmpIndex[0]);
            this.http.get("http://localhost:3000/api/getVendorBalance?vID=" + this.vendorData[index_1 - 1].vID)
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) {
                if (resp.length != 0) {
                    _this.VendorBillBalance = resp;
                    _this.currentVendorBalance = parseInt(_this.VendorBillBalance[0].balance);
                }
                else {
                    _this.currentVendorBalance = 0;
                }
                _this.insertVendorBill(_this.vendorData[index_1 - 1].vID);
            });
        }
    };
    VendorAddPaidBillComponent.prototype.insertVendorBill = function (vno) {
        var _this = this;
        if (this.vendorAddBillForm.value.tranType == "Add")
            this.currentVendorBalance += this.vendorAddBillForm.value.tranAmount;
        else if (this.vendorAddBillForm.value.tranType == "Paid")
            this.currentVendorBalance -= this.vendorAddBillForm.value.tranAmount;
        var json = JSON.stringify({ vID: vno, tranDate: this.vendorAddBillForm.value.tranDate, tranType: this.vendorAddBillForm.value.tranType, amount: this.vendorAddBillForm.value.tranAmount, balance: this.currentVendorBalance, note: this.vendorAddBillForm.value.note });
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append("Content-Type", "application/json");
        this.http.post("http://localhost:3000/api/addVendorBill", json, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            // this.router.navigate(['employees'], {});
            _this.getTodaysRecords();
            alert("Bill Entry Added!");
        });
        this.vendorAddBillForm.reset();
    };
    VendorAddPaidBillComponent.prototype.updateVendorData = function () {
        var _this = this;
        if (this.editMode) {
            var tmpIndex = this.empNameIndex.split(' ');
            var index = parseInt(tmpIndex[0]);
            var json = JSON.stringify({ vID: this.vendorData[index - 1].vID, tranDate: this.vendorAddBillForm.value.tranDate, tranType: this.vendorAddBillForm.value.tranType, amount: this.vendorAddBillForm.value.tranAmount, note: this.vendorAddBillForm.value.note, id: this.editId });
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            header.append("Content-Type", "application/json");
            this.http.post("http://localhost:3000/api/updateVendorBill", json, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (resp) {
                alert("Bill Entry Updated!");
                _this.router.navigate(['vendors'], {});
            });
            this.vendorAddBillForm.reset();
        }
    };
    VendorAddPaidBillComponent.prototype.cancel = function () {
        this.router.navigate(['vendors'], {});
    };
    VendorAddPaidBillComponent.prototype.getEmployeeName = function (name) {
        return name;
    };
    VendorAddPaidBillComponent.prototype.setEditData = function () {
        this.vendorBillData = this.MainSer.getEditObj();
        console.log("Vendor Data " + this.vendorData);
        var index = this.vendorData.map(function (v) { return v.vID; }).indexOf(this.vendorBillData.vID);
        var tmpEName = (index + 1) + " . " + this.vendorData[index].vName;
        var latest_date = this.datepipe.transform(this.vendorBillData.tranDate, 'yyyy-MM-dd');
        this.vendorAddBillForm.controls['tranDate'].setValue(latest_date);
        this.vendorAddBillForm.controls['vName'].setValue(tmpEName);
        this.vendorAddBillForm.controls['tranType'].setValue(this.vendorBillData.tranType);
        this.vendorAddBillForm.controls['tranAmount'].setValue(this.vendorBillData.amount);
        this.vendorAddBillForm.controls['note'].setValue(this.vendorBillData.note);
        this.editId = this.vendorBillData.id;
    };
    VendorAddPaidBillComponent.prototype.getTodaysRecords = function () {
        var _this = this;
        var todayDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
        this.vendorAddBillForm.controls['tranDate'].setValue(todayDate);
        this.http.get("http://localhost:3000/api/vendorEntryDate?tranDate=" + todayDate)
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.vendorBillDataObj = resp;
        });
    };
    VendorAddPaidBillComponent.prototype.getVName = function (search) {
        return this.vendorData[this.vendorData.map(function (e) { return e.vID; }).indexOf(search)].vName;
    };
    VendorAddPaidBillComponent.prototype.onChange = function (e) {
        console.log("add emp advance++ " + e);
    };
    VendorAddPaidBillComponent.prototype.ngOnInit = function () {
        console.log("EMP Adv Edit Mode: " + this.MainSer.getEditMode());
        this.editMode = this.MainSer.getEditMode();
        this.getVendorsName();
        var tmptodaySysDate = new Date();
        this.todaySysDate = this.datepipe.transform(tmptodaySysDate, 'yyyy-MM-dd');
        this.getTodaysRecords();
        // let todayDate= this.datepipe.transform(new Date(), 'yyyy-MM-dd');
        this.vendorAddBillForm.controls['tranDate'].setValue(this.todaySysDate);
    };
    VendorAddPaidBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vendor-add-paid-bill',
            template: __webpack_require__(/*! ./vendor-add-paid-bill.component.html */ "./src/app/vendor/vendor-add-paid-bill/vendor-add-paid-bill.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            styles: [__webpack_require__(/*! ./vendor-add-paid-bill.component.css */ "./src/app/vendor/vendor-add-paid-bill/vendor-add-paid-bill.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], VendorAddPaidBillComponent);
    return VendorAddPaidBillComponent;
}());



/***/ }),

/***/ "./src/app/vendor/vendor.component.css":
/*!*********************************************!*\
  !*** ./src/app/vendor/vendor.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.row{\r\n    margin-right: 0px;\r\n}"

/***/ }),

/***/ "./src/app/vendor/vendor.component.html":
/*!**********************************************!*\
  !*** ./src/app/vendor/vendor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3>Vendors</h3>\n</div>\n<div class=\"containerDiv row\">\n  <div class=\"col-xs-6\">\n    <div>\n      <span *ngIf=\"vData.length\">Search: <input  [(ngModel)]=\"searchString\"></span> \n      &nbsp;<button class=\"btn btn-success \" (click)=\"addnew()\">Add New Vendor</button>\n      &nbsp;<button class=\"btn btn-success\"  (click)=\"addVendorBill()\">Add Vendor Bill</button>\n      &nbsp;<button class=\"btn btn-success\"  (click)=\"router.navigate(['searchVendorBill'], {});\">Search Vendor Bills</button>\n    </div>\n    <br>\n    <table  class=\"table border\" *ngIf=\"vData.length\">\n      <tr>\n          <th>No</th>\n          <th>Name</th>\n          <th>Add</th>\n          <th>Contact No</th>\n          <th>Product Name</th>\n          <th>Action</th>\n      </tr>\n      <tr *ngFor=\"let v of vData | filter : 'vName' : searchString;let i = index;\">\n        <td>{{i+1}}</td>\n        <td>{{v.vName}}</td>\n        <td>{{v.vAdd}}</td>\n        <td>{{v.mobileNo}}</td>\n        <td>{{v.vProductName}}</td>\n        <td><button (click)=\"editVendor(v)\" class=\"btn btn-primary\">Edit</button></td>\n      </tr>\n      \n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/vendor/vendor.component.ts":
/*!********************************************!*\
  !*** ./src/app/vendor/vendor.component.ts ***!
  \********************************************/
/*! exports provided: VendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorComponent", function() { return VendorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VendorComponent = /** @class */ (function () {
    function VendorComponent(http, route, router, MainSer) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.MainSer = MainSer;
        this.vData = [];
    }
    VendorComponent.prototype.getVendorData = function () {
        var _this = this;
        console.log("VData");
        this.http.get("http://localhost:3000/api/getVendorData")
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) {
            _this.vData = resp;
            console.log("vData " + _this.vData);
        });
    };
    VendorComponent.prototype.addnew = function () {
        this.MainSer.setCreateMode(true);
        this.router.navigate(['addVendor'], {});
    };
    VendorComponent.prototype.editVendor = function (editObj) {
        this.MainSer.setEditMode(true);
        this.MainSer.setEditObj(editObj);
        this.router.navigate(['addVendor'], {});
    };
    VendorComponent.prototype.addVendorBill = function () {
        // this.MainSer.setEmpAdvAddMode(true);
        this.router.navigate(['vendorAddPaidBill'], {});
    };
    VendorComponent.prototype.ngOnInit = function () {
        this.getVendorData();
        this.MainSer.setCreateMode(false);
        this.MainSer.setEditMode(false);
        /* this.MainSer.setEmpAdvEditMode(false);
      this.MainSer.setEmpAdvAddMode(false); */
        console.log("vData " + this.vData);
    };
    VendorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vendor',
            template: __webpack_require__(/*! ./vendor.component.html */ "./src/app/vendor/vendor.component.html"),
            styles: [__webpack_require__(/*! ./vendor.component.css */ "./src/app/vendor/vendor.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]])
    ], VendorComponent);
    return VendorComponent;
}());



/***/ }),

/***/ "./src/app/w3.css":
/*!************************!*\
  !*** ./src/app/w3.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* W3.CSS 4.10 February 2018 by Jan Egil and Borge Refsnes */\r\n.contentMargin\r\n{\r\n    padding: 0px 0px 0 0px!important;\r\n}\r\n.active\r\n{\r\n     background:#f44336!important;\r\n}\r\n/* W3.CSS 4.10 February 2018 by Jan Egil and Borge Refsnes */\r\nhtml{box-sizing:border-box}\r\n*,*:before,*:after{box-sizing:inherit}\r\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\r\nhtml{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}\r\nbody{margin:0}\r\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}\r\naudio,canvas,progress,video{display:inline-block}\r\nprogress{vertical-align:baseline}\r\naudio:not([controls]){display:none;height:0}\r\n[hidden],template{display:none}\r\na{background-color:transparent;-webkit-text-decoration-skip:objects}\r\na:active,a:hover{outline-width:0}\r\nabbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}\r\ndfn{font-style:italic}\r\nmark{background:#ff0;color:#000}\r\nsmall{font-size:80%}\r\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\r\nsub{bottom:-0.25em}\r\nsup{top:-0.5em}\r\nfigure{margin:1em 40px}\r\nimg{border-style:none}\r\nsvg:not(:root){overflow:hidden}\r\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}\r\nhr{box-sizing:content-box;height:0;overflow:visible}\r\nbutton,input,select,textarea{font:inherit;margin:0}\r\noptgroup{font-weight:bold}\r\nbutton,input{overflow:visible}\r\nbutton,select{text-transform:none}\r\nbutton,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}\r\nbutton::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner{border-style:none;padding:0}\r\nbutton:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring{outline:1px dotted ButtonText}\r\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}\r\nlegend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\r\ntextarea{overflow:auto}\r\n[type=checkbox],[type=radio]{padding:0}\r\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\r\n[type=search]{-webkit-appearance:textfield;outline-offset:-2px}\r\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}\r\n::-webkit-input-placeholder{color:inherit;opacity:0.54}\r\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\r\n/* End extract */\r\nhtml,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}\r\nhtml{overflow-x:hidden}\r\nh1{font-size:36px}\r\nh2{font-size:30px}\r\nh3{font-size:24px}\r\nh4{font-size:20px}\r\nh5{font-size:18px}\r\nh6{font-size:16px}\r\n.w3-serif{font-family:serif}\r\nh1,h2,h3,h4,h5,h6{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}\r\n.w3-wide{letter-spacing:4px}\r\nhr{border:0;border-top:1px solid #eee;margin:20px 0}\r\n.w3-image{max-width:100%;height:auto}\r\nimg{vertical-align:middle}\r\na{color:inherit}\r\n.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}\r\n.w3-table-all{border:1px solid #ccc}\r\n.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}\r\n.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}\r\n.w3-table-all tr:nth-child(odd){background-color:#fff}\r\n.w3-table-all tr:nth-child(even){background-color:#f1f1f1}\r\n.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}\r\n.w3-centered tr th,.w3-centered tr td{text-align:center}\r\n.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}\r\n.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}\r\n.w3-btn,.w3-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}\r\n.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}\r\n.w3-disabled *,:disabled *{pointer-events:none}\r\n.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}\r\n.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}\r\n.w3-badge{border-radius:50%}\r\n.w3-ul{list-style-type:none;padding:0;margin:0}\r\n.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}\r\n.w3-ul li:last-child{border-bottom:none}\r\n.w3-tooltip,.w3-display-container{position:relative}\r\n.w3-tooltip .w3-text{display:none}\r\n.w3-tooltip:hover .w3-text{display:inline-block}\r\n.w3-ripple:active{opacity:0.5}\r\n.w3-ripple{transition:opacity 0s}\r\n.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}\r\n.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}\r\n.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}\r\n.w3-dropdown-hover:hover .w3-dropdown-content{display:block}\r\n.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}\r\n.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}\r\n.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}\r\n.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}\r\n.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;}\r\n.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:187px;}\r\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}\r\n.w3-main,#main{transition:margin-left .4s}\r\n.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\r\n.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}\r\n.w3-bar{width:100%;overflow:hidden}\r\n.w3-center .w3-bar{display:inline-block;width:auto}\r\n.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;display:block;outline:0}\r\n.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}\r\n.w3-bar .w3-button{white-space:normal}\r\n.w3-bar-block .w3-bar-item{display:block;padding:8px 16px;text-align:left;border:none;white-space:normal;float:none;outline:0}\r\n.w3-bar-block.w3-center .w3-bar-item{text-align:center}\r\n.w3-block{display:block;width:100%}\r\n.w3-responsive{display:block;overflow-x:auto}\r\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\r\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\r\n.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}\r\n.w3-col.s1{width:8.33333%}\r\n.w3-col.s2{width:16.66666%}\r\n.w3-col.s3{width:24.99999%}\r\n.w3-col.s4{width:33.33333%}\r\n.w3-col.s5{width:41.66666%}\r\n.w3-col.s6{width:49.99999%}\r\n.w3-col.s7{width:58.33333%}\r\n.w3-col.s8{width:66.66666%}\r\n.w3-col.s9{width:74.99999%}\r\n.w3-col.s10{width:83.33333%}\r\n.w3-col.s11{width:91.66666%}\r\n.w3-col.s12{width:99.99999%}\r\n@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}\r\n.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}\r\n.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}\r\n@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}\r\n.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}\r\n.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}\r\n.w3-content{max-width:980px;margin:auto}\r\n.w3-rest{overflow:hidden}\r\n.w3-cell-row{display:table;width:100%}\r\n.w3-cell{display:table-cell}\r\n.w3-cell-top{vertical-align:top}\r\n.w3-cell-middle{vertical-align:middle}\r\n.w3-cell-bottom{vertical-align:bottom}\r\n.w3-hide{display:none!important}\r\n.w3-show-block,.w3-show{display:block!important}\r\n.w3-show-inline-block{display:inline-block!important}\r\n@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}\r\n.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}\t\r\n.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}\r\n.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}\r\n@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}\r\n@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}\r\n@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}\r\n@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}}\r\n.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}\r\n.w3-top{top:0}\r\n.w3-bottom{bottom:0}\r\n.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}\r\n.w3-display-topleft{position:absolute;left:0;top:0}\r\n.w3-display-topright{position:absolute;right:0;top:0}\r\n.w3-display-bottomleft{position:absolute;left:0;bottom:0}\r\n.w3-display-bottomright{position:absolute;right:0;bottom:0}\r\n.w3-display-middle{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}\r\n.w3-display-left{position:absolute;top:50%;left:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}\r\n.w3-display-right{position:absolute;top:50%;right:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}\r\n.w3-display-topmiddle{position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-container:hover .w3-display-hover{display:block}\r\n.w3-display-container:hover span.w3-display-hover{display:inline-block}\r\n.w3-display-hover{display:none}\r\n.w3-display-position{position:absolute}\r\n.w3-circle{border-radius:50%}\r\n.w3-round-small{border-radius:2px}\r\n.w3-round,.w3-round-medium{border-radius:4px}\r\n.w3-round-large{border-radius:8px}\r\n.w3-round-xlarge{border-radius:16px}\r\n.w3-round-xxlarge{border-radius:32px}\r\n.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}\r\n.w3-container,.w3-panel{padding:0.01em 16px}\r\n.w3-panel{margin-top:16px;margin-bottom:16px}\r\n.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}\r\n.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}\r\n.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}\r\n.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}\r\n.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-spin{-webkit-animation:w3-spin 2s infinite linear;animation:w3-spin 2s infinite linear}\r\n@-webkit-keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\r\n@keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\r\n.w3-animate-fading{-webkit-animation:fading 10s infinite;animation:fading 10s infinite}\r\n@-webkit-keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\r\n@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\r\n.w3-animate-opacity{-webkit-animation:opac 0.8s;animation:opac 0.8s}\r\n@-webkit-keyframes opac{from{opacity:0} to{opacity:1}}\r\n@keyframes opac{from{opacity:0} to{opacity:1}}\r\n.w3-animate-top{position:relative;-webkit-animation:animatetop 0.4s;animation:animatetop 0.4s}\r\n@-webkit-keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\r\n@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\r\n.w3-animate-left{position:relative;-webkit-animation:animateleft 0.4s;animation:animateleft 0.4s}\r\n@-webkit-keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\r\n@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\r\n.w3-animate-right{position:relative;-webkit-animation:animateright 0.4s;animation:animateright 0.4s}\r\n@-webkit-keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\r\n@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\r\n.w3-animate-bottom{position:relative;-webkit-animation:animatebottom 0.4s;animation:animatebottom 0.4s}\r\n@-webkit-keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\r\n@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\r\n.w3-animate-zoom {-webkit-animation:animatezoom 0.6s;animation:animatezoom 0.6s}\r\n@-webkit-keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}\r\n@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}\r\n.w3-animate-input{transition:width 0.4s ease-in-out}\r\n.w3-animate-input:focus{width:100%!important}\r\n.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}\r\n.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}\r\n.w3-opacity-max{opacity:0.25}\r\n.w3-opacity-min{opacity:0.75}\r\n.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\r\n.w3-greyscale,.w3-grayscale{-webkit-filter:grayscale(75%);filter:grayscale(75%)}\r\n.w3-greyscale-min,.w3-grayscale-min{-webkit-filter:grayscale(50%);filter:grayscale(50%)}\r\n.w3-sepia{-webkit-filter:sepia(75%);filter:sepia(75%)}\r\n.w3-sepia-max,.w3-hover-sepia:hover{-webkit-filter:sepia(100%);filter:sepia(100%)}\r\n.w3-sepia-min{-webkit-filter:sepia(50%);filter:sepia(50%)}\r\n.w3-tiny{font-size:10px!important}\r\n.w3-small{font-size:12px!important}\r\n.w3-medium{font-size:15px!important}\r\n.w3-large{font-size:18px!important}\r\n.w3-xlarge{font-size:24px!important}\r\n.w3-xxlarge{font-size:36px!important}\r\n.w3-xxxlarge{font-size:48px!important}\r\n.w3-jumbo{font-size:64px!important}\r\n.w3-left-align{text-align:left!important}\r\n.w3-right-align{text-align:right!important}\r\n.w3-justify{text-align:justify!important}\r\n.w3-center{text-align:center!important}\r\n.w3-border-0{border:0!important}\r\n.w3-border{border:1px solid #ccc!important}\r\n.w3-border-top{border-top:1px solid #ccc!important}\r\n.w3-border-bottom{border-bottom:1px solid #ccc!important}\r\n.w3-border-left{border-left:1px solid #ccc!important}\r\n.w3-border-right{border-right:1px solid #ccc!important}\r\n.w3-topbar{border-top:6px solid #ccc!important}\r\n.w3-bottombar{border-bottom:6px solid #ccc!important}\r\n.w3-leftbar{border-left:6px solid #ccc!important}\r\n.w3-rightbar{border-right:6px solid #ccc!important}\r\n.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}\r\n.w3-margin{margin:16px!important}\r\n.w3-margin-top{margin-top:16px!important}\r\n.w3-margin-bottom{margin-bottom:16px!important}\r\n.w3-margin-left{margin-left:16px!important}\r\n.w3-margin-right{margin-right:16px!important}\r\n.w3-padding-small{padding:4px 8px!important}\r\n.w3-padding{padding:8px 16px!important}\r\n.w3-padding-large{padding:12px 24px!important}\r\n.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}\r\n.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}\r\n.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}\r\n.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}\r\n.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}\r\n.w3-left{float:left!important}\r\n.w3-right{float:right!important}\r\n.w3-button:hover{color:#000!important;background-color:#ccc!important}\r\n.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}\r\n.w3-hover-none:hover{box-shadow:none!important}\r\n/* Colors */\r\n.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}\r\n.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}\r\n.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}\r\n.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}\r\n.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}\r\n.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}\r\n.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}\r\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\r\n.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}\r\n.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}\r\n.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}\r\n.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}\r\n.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}\r\n.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}\r\n.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}\r\n.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}\r\n.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}\r\n.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}\r\n.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}\r\n.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}\r\n.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}\r\n.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}\r\n.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}\r\n.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#9e9e9e!important}\r\n.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}\r\n.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}\r\n.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}\r\n.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}\r\n.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}\r\n.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}\r\n.w3-text-amber,.w3-hover-text-amber:hover{color:#ffc107!important}\r\n.w3-text-aqua,.w3-hover-text-aqua:hover{color:#00ffff!important}\r\n.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}\r\n.w3-text-light-blue,.w3-hover-text-light-blue:hover{color:#87CEEB!important}\r\n.w3-text-brown,.w3-hover-text-brown:hover{color:#795548!important}\r\n.w3-text-cyan,.w3-hover-text-cyan:hover{color:#00bcd4!important}\r\n.w3-text-blue-grey,.w3-hover-text-blue-grey:hover,.w3-text-blue-gray,.w3-hover-text-blue-gray:hover{color:#607d8b!important}\r\n.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}\r\n.w3-text-light-green,.w3-hover-text-light-green:hover{color:#8bc34a!important}\r\n.w3-text-indigo,.w3-hover-text-indigo:hover{color:#3f51b5!important}\r\n.w3-text-khaki,.w3-hover-text-khaki:hover{color:#b4aa50!important}\r\n.w3-text-lime,.w3-hover-text-lime:hover{color:#cddc39!important}\r\n.w3-text-orange,.w3-hover-text-orange:hover{color:#ff9800!important}\r\n.w3-text-deep-orange,.w3-hover-text-deep-orange:hover{color:#ff5722!important}\r\n.w3-text-pink,.w3-hover-text-pink:hover{color:#e91e63!important}\r\n.w3-text-purple,.w3-hover-text-purple:hover{color:#9c27b0!important}\r\n.w3-text-deep-purple,.w3-hover-text-deep-purple:hover{color:#673ab7!important}\r\n.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}\r\n.w3-text-sand,.w3-hover-text-sand:hover{color:#fdf5e6!important}\r\n.w3-text-teal,.w3-hover-text-teal:hover{color:#009688!important}\r\n.w3-text-yellow,.w3-hover-text-yellow:hover{color:#d2be0e!important}\r\n.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}\r\n.w3-text-black,.w3-hover-text-black:hover{color:#000!important}\r\n.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}\r\n.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}\r\n.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}\r\n.w3-border-amber,.w3-hover-border-amber:hover{border-color:#ffc107!important}\r\n.w3-border-aqua,.w3-hover-border-aqua:hover{border-color:#00ffff!important}\r\n.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}\r\n.w3-border-light-blue,.w3-hover-border-light-blue:hover{border-color:#87CEEB!important}\r\n.w3-border-brown,.w3-hover-border-brown:hover{border-color:#795548!important}\r\n.w3-border-cyan,.w3-hover-border-cyan:hover{border-color:#00bcd4!important}\r\n.w3-border-blue-grey,.w3-hover-border-blue-grey:hover,.w3-border-blue-gray,.w3-hover-border-blue-gray:hover{border-color:#607d8b!important}\r\n.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}\r\n.w3-border-light-green,.w3-hover-border-light-green:hover{border-color:#8bc34a!important}\r\n.w3-border-indigo,.w3-hover-border-indigo:hover{border-color:#3f51b5!important}\r\n.w3-border-khaki,.w3-hover-border-khaki:hover{border-color:#f0e68c!important}\r\n.w3-border-lime,.w3-hover-border-lime:hover{border-color:#cddc39!important}\r\n.w3-border-orange,.w3-hover-border-orange:hover{border-color:#ff9800!important}\r\n.w3-border-deep-orange,.w3-hover-border-deep-orange:hover{border-color:#ff5722!important}\r\n.w3-border-pink,.w3-hover-border-pink:hover{border-color:#e91e63!important}\r\n.w3-border-purple,.w3-hover-border-purple:hover{border-color:#9c27b0!important}\r\n.w3-border-deep-purple,.w3-hover-border-deep-purple:hover{border-color:#673ab7!important}\r\n.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}\r\n.w3-border-sand,.w3-hover-border-sand:hover{border-color:#fdf5e6!important}\r\n.w3-border-teal,.w3-hover-border-teal:hover{border-color:#009688!important}\r\n.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}\r\n.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}\r\n.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}\r\n.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#9e9e9e!important}\r\n.w3-border-light-grey,.w3-hover-border-light-grey:hover,.w3-border-light-gray,.w3-hover-border-light-gray:hover{border-color:#f1f1f1!important}\r\n.w3-border-dark-grey,.w3-hover-border-dark-grey:hover,.w3-border-dark-gray,.w3-hover-border-dark-gray:hover{border-color:#616161!important}\r\n.w3-border-pale-red,.w3-hover-border-pale-red:hover{border-color:#ffe7e7!important}\r\n.w3-border-pale-green,.w3-hover-border-pale-green:hover{border-color:#e7ffe7!important}\r\n.w3-border-pale-yellow,.w3-hover-border-pale-yellow:hover{border-color:#ffffcc!important}\r\n.w3-border-pale-blue,.w3-hover-border-pale-blue:hover{border-color:#e7ffff!important}"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\BhadaitMisal\BhadaitMisal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map