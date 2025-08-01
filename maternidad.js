const infoVacunas = {
  // ALINEACIÓN DEL TEXTO A LA IZQUIERDA, NO CENTRAL 
  gestantes: `
    <ul class="list-unstyled" >
      <li>Triple bacteriana acelular: a partir de la semana 20.</li>
      <li>Antigripal: en cualquier trimestre.</li>
    </ul>
  `,
  // ALINEACIÓN DEL TEXTO A LA IZQUIERDA, NO CENTRAL 
  recien: `
    <ul class="list-unstyled" >
      <li>BCG: antes de egresar de la maternidad.</li>
      <li>Hepatitis B: en las primeras 12 horas de vida.</li>
    </ul>
  `,
  // ALINEACIÓN DEL TEXTO A LA IZQUIERDA, NO CENTRAL 
  "1anio": `
    <ul class="list-unstyled" >
    
      <li>Rotavirus: 2 y 4 meses</li>
      <li>Quintuple: 2, 4 y 6 meses</li>
      <li>IPV contra la polio: 2, 4 y 6 meses</li>
      <li>Neumococo Conjugada: 2, 4 y 6 meses</li>
      <li>Meningococo: 3 y 5 meses</li>
      <li>Antigripal: a partir de los 6 meses</li>
      <li>Triple viral: 12 meses</li>
      <li>Hepatitis A: 12 meses</li>
</ul>
  `
};

document.querySelectorAll(".vacuna-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const etapa = btn.getAttribute("data-etapa");
    document.querySelectorAll(".vacuna-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("vacuna-info").innerHTML = infoVacunas[etapa];
  });
});

// Mostrar por defecto gestantes
document.querySelector('.vacuna-btn[data-etapa="gestantes"]').click();
