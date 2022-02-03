import {FormGroup} from "@angular/forms";

export function senhaUsuarioIgauisValidator(formGroup: FormGroup) {
  const userName = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (userName.trim() + password.trim()) {
    return userName !== password ? null : { usuarioIgualSenha: true };
  } else {
    return null;
  }
}

