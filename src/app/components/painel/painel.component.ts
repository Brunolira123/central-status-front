import { Component, OnInit } from '@angular/core';
import { Filial } from '../../model/filial.model';
import { FilialService } from '../../core/filial/filial.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  filiais: Filial[] = [];
  usuario = { nome: 'Biruleibe' };

  constructor(
    private filialService: FilialService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filialService.getFiliais().subscribe({
      next: (data) => this.filiais = data,
      error: (err) => console.error('Erro ao carregar filiais', err)
    });
  }

  confirmarLogout(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        titulo: 'Confirmação',
        mensagem: 'Tem certeza que deseja sair?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.logout();
      }
    });
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
