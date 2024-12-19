import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar'

@Component({
  selector: 'app-file-upload-progress',
  standalone: true,
  imports: [ProgressBarModule],
  templateUrl: './file-upload-progress.component.html',
  styleUrl: './file-upload-progress.component.scss'
})
export class FileUploadProgressComponent {
  file: File | null = null; // Armazena o arquivo selecionado
  progress: number = 0; // Progresso do upload (simulação)
  calcKb = this.file ? this.file?.size / 1024 / 1024 : 0;

  // Evento para capturar o arquivo selecionado
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.file = input.files[0]; // Captura o arquivo
      this.simulateUpload(); // Simula o progresso de upload
    }
  }

  // Simulação de progresso
  simulateUpload(): void {
    this.progress = 0;
    const interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 10; // Incrementa o progresso
      } else {
        clearInterval(interval); // Para a simulação ao chegar em 100%
      }
    }, 500); // Atualiza a cada 500ms
  }
}
