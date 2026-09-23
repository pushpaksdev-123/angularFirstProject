import { Routes } from '@angular/router';
import { DadaBindingComponant } from './compoanants/dada-binding-componant/dada-binding-componant';
import { AttributeDirective } from './compoanants/directive/attribute-directive/attribute-directive';
import { StrucralDirective } from './compoanants/directive/strucral-directive/strucral-directive';
import { AddEmployee } from './compoanants/add-employee/add-employee';
import { EmployeeList } from './compoanants/employee-list/employee-list';
import { Ifelse } from './compoanants/ifelse/ifelse';
import { Forandswitch } from './compoanants/forandswitch/forandswitch';
import { PipeInAngular } from './compoanants/pipe-in-angular/pipe-in-angular';
import { TemplateForm } from './compoanants/template-form/template-form';
import { ReactiveForms } from './compoanants/reactive-forms/reactive-forms';

export const routes: Routes = [
    {
        path: 'data-binding',
        component: DadaBindingComponant
    },
    {
        path: 'attribute-directive',
        component: AttributeDirective
    },
    {
        path: 'structural-directive',
        component:StrucralDirective
    },
    {
        path: 'add-employee',
        component: AddEmployee
    },
    {
        path: 'employee-list',
        component: EmployeeList
    },
    {
        path: 'if-condition',
        component: Ifelse
    },
    {
        path: 'for-and-switch',
        component:Forandswitch
    },
    {
        path: 'pipes',
        component: PipeInAngular
    },
    {
            path: 'template-form',
            component: TemplateForm
    },
    {
        path: 'reactive-forms',
        component: ReactiveForms
    }

];
