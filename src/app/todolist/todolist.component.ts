import { Component, OnInit, ViewChild } from '@angular/core';

import { PoCheckboxGroupOption,
         PoSelectOption,
         PoListViewAction,
         PoListViewLiterals,
         PoNotificationService, 
         PoModalComponent,
         PoModalAction} from '@portinari/portinari-ui';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodolistService } from '../todolist.service';

        
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {

    action: PoListViewAction;
    actions: Array<PoListViewAction>;
    customLiterals: PoListViewLiterals;
    height: number;
    items: Array<any>;
    literals: string;
    properties: Array<string>;
    propertyLink: string;
    propertyLinkValue: string;
    propertyTitle: string;
    titleAction: string;
    TodolistInterface:  Array<any>;

  ///////////////////////////////////////////////////////////
  //inclui na Grid
  ///////////////////////////////////////////////////////////

  constructor(private service: TodolistService ,private poNotification: PoNotificationService){}
    
  ngOnInit() {
    this.restore();
    this.service.list()
    .subscribe(dados => this.TodolistInterface = dados )
    ;  
  }
    
    readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
      { value: 'hideSelectAll', label: 'Hide Select All', disabled: true },
      { value: 'select', label: 'Select' },
      { value: 'showMoreDisabled', label: 'Show More Disabled' }
    ];
  
    public readonly iconOptions: Array<PoSelectOption> = [
      { value: 'todo', label: 'To Do' },
      { value: 'development', label: 'Development' },
      { value: 'codereview', label: 'Code Review' },
      { value: 'testing', label: 'Testing' },
      { value: 'done', label: 'Done' }
    ];

    readonly propertyTitleOptions: Array<PoSelectOption> = [
      { value: 'tarefa', label: 'tarefa' },
      { value: 'texto', label: 'texto' },
      { value: 'dataini', label: 'dataini' },
      { value: 'datafin', label: 'datafin' },
      { value: 'etapa', label: 'etapa' },
      { value: 'analista', label: 'analista' }
    ];

    
    /*constructor(private poNotification: PoNotificationService) { }
  
    ngOnInit() {
      this.restore();
    }*/
  
    addAction(action: PoListViewAction) {
      const newAction = Object.assign({}, action);
      newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
  
      this.actions.push(newAction);
      this.restoreActionForm();
    }
  

  
    changeAction(action) {
      this.titleAction = action;
    }
  
    changeActionOptions() {
      this.propertiesOptions[0].disabled = !this.properties.includes(this.propertiesOptions[1].value);
    }
  
    changeLiterals() {
      try {
        this.customLiterals = JSON.parse(this.literals);
      } catch {
        this.customLiterals = undefined;
      }
    }
  
    restore() {
      this.actions = [];
      this.items = [];
      this.height = undefined;
      this.literals = '';
      this.properties = [];
      this.propertyLink = 'url';
      this.propertyLinkValue = '';
      this.propertyTitle = '';
      this.titleAction = '';
      this.restoreActionForm();
    }
  
    showMore() {
      this.addItem();
      this.carregaItem()
    }

    carregaItem() {
      this.items.push(this.generateNewItem(this.items.length + 1));          
    }

    private generateCarregaItem() {
      return {
        id: '${TodolistInterface.id}',
        tarefa: '${TodolistInterface.tarefa}',
        analista: '${TodolistInterface.analista}',
        dataini: '${TodolistInterface.dataini}',
        datafin: '${TodolistInterface.datafin}',
        etapa: '${TodolistInterface.etapa}',
        texto: '${TodolistInterface.texto}',
       };
    }


    addItem() {
      this.items.push(this.generateNewItem(this.items.length + 1));      
    }

    private generateNewItem(index) {
      return {
        tarefa: `Tarefa ${index}`,
        dataini: Date(),
        datafin: Date(),
        etapa: 'DONE',
        analista: `Analista ${index}`,
        texto: `Projeto${index}  O Desafio consiste em criar uma aplicacao de lista de tarefas (to-do list), com as seguintes observacoes:
           ( 1_ Deve criar, alterar e excluir uma tarefa.) (2_ Campo de busca para tarefas.) e ETC`,      
      };

    }

    private restoreActionForm() {
      this.action = {
        label: '',
        visible: null
      };
    }
  
    private showAction(action: string): any {
      this.poNotification.success(`Action clicked: ${action}`);
    }

    
  
  }
