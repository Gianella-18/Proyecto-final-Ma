const preguntasFrecuentes = [
    // --- TIENDA (7) ---
    {
      categoria: 'tienda',
      pregunta: '¿Cómo puedo comprar productos?',
      respuesta: 'Navegá por la tienda, filtrá por categoría, agregá productos al carrito y finalizá tu compra en pocos pasos.'
    },
    {
      categoria: 'tienda',
      pregunta: '¿Cómo puedo vender productos que ya no uso?',
      respuesta: 'Desde tu perfil podés subir fotos, precios y detalles del producto. Nuestro equipo revisará y publicará los productos en la tienda.'
    },
    {
      categoria: 'tienda',
      pregunta: '¿Puedo filtrar mi busqueda de productos?',
      respuesta: 'Sí, usá los filtros de categoría y buscá el producto que necesitás.'
    },
    {
      categoria: 'tienda',
      pregunta: '¿Cómo sé si un producto todavía está disponible?',
      respuesta: 'Los productos disponibles son los que figuran en nuestra tienda. Una vez vendido, se ocultan para no generar confusión.'
    },
    {
      categoria: 'tienda',
      pregunta: '¿Qué pasa si el producto que recibo está en mal estado?',
      respuesta: 'Podés contactarnos inmediatamente. Revisamos cada caso y, si corresponde, realizamos una devolución o reembolso.' 
    },
    {
      categoria: 'tienda',
      pregunta: '¿Se pueden reservar productos?',
      respuesta: 'Sí, algunas vendedoras permiten reservar productos por un tiempo limitado. Coordiná desde el chat interno.'
    },
    {
      categoria: 'tienda',
      pregunta: '¿Cómo contacto a la vendedora antes de comprar?',
      respuesta: 'Desde el producto podés enviarle un mensaje para consultar detalles antes de concretar la compra.'
    },
  
    // --- PAGOS (8) ---
    {
      categoria: 'pagos',
      pregunta: '¿Qué formas de pago aceptan?',
      respuesta: 'Aceptamos tarjetas de crédito y débito, MercadoPago y transferencias bancarias.'
    },
    {
      categoria: 'pagos',
      pregunta: '¿Realizan envíos?',
      respuesta: 'No, los envíos se coordinan con la vendedora o se puede acordar un punto de entrega cercano.'
    },
    {
      categoria: 'pagos',
      pregunta: '¿Se pueden hacer cambios o devoluciones?',
      respuesta: 'Al tratarse de productos usados y únicos, recomendamos leer bien la descripción antes de comprar. No se aceptan cambios ni devoluciones, salvo que el producto recibido no coincida con lo publicado.'
    },
    {
      categoria: 'pagos',
      pregunta: '¿Es seguro comprar y vender en Ma! ?',
      respuesta: 'Sí, los perfiles están verificados, los pagos son seguros y las entregas pueden coordinarse con las vendedoras.'
    },
    {
      categoria: 'pagos',
      pregunta: '¿Los precios están en pesos argentinos?',
      respuesta: 'Sí, todos los precios están expresados en ARS.'
    },
    {
      categoria: 'pagos',
      pregunta: '¿Cómo puedo obtener un comprobante de pago?',
      respuesta: 'Después de realizar tu compra, te enviamos un comprobante automático por mail.'
    },
    {
      categoria: 'pagos',
      pregunta: '¿Qué hago si el pago fue rechazado?',
      respuesta: 'Revisá si los datos de tu tarjeta están bien ingresados o probá otro método de pago.'
    },
    {
      categoria: 'pagos',
      pregunta: '¿Puedo cancelar una compra después de pagar?',
      respuesta: 'Solo se puede cancelar si la vendedora aún no confirmó el envío. Contáctanos lo antes posible así solucionamos el problema.'
    },
  
    // --- COMUNIDAD (8) ---
    {
      categoria: 'comunidad',
      pregunta: '¿Cómo me uno a una conversación específica?',
      respuesta: 'Ingresá al tema que te interese y escribí tu mensaje en el grupo. Aparecerá con tu nombre o iniciales.'
    },
    {
      categoria: 'comunidad',
      pregunta: '¿Qué temas puedo hablar en la comunidad?',
      respuesta: 'Embarazo, lactancia, crianza, sueño del bebé, alimentación, salud, entre otros.'
    },
    {
      categoria: 'comunidad',
      pregunta: '¿Hay moderación en los chats?',
      respuesta: 'Sí, comentarios ofensivos o inapropiados pueden ser reportados y el perfil de la usuaria será eliminado.'
    },
    {
      categoria: 'comunidad',
      pregunta: '¿Puedo enviar mensajes privados?',
      respuesta: 'No, al tratarse de una comunidad los mensajes son públicos dentro de cada tema.'
    },
    {
      categoria: 'comunidad',
      pregunta: '¿Necesito estar registrada para participar?',
      respuesta: 'Sí, para comentar en una conversación necesitás una cuenta en la plataforma.'
    },
    {
      categoria: 'comunidad',
      pregunta: '¿Puedo eliminar o editar mis mensajes?',
      respuesta: 'Podés eliminar tus propios mensajes. La edición estará disponible próximamente.'
    },
    {
      categoria: 'comunidad',
      pregunta: '¿Puedo crear un nuevo tema de conversación?',
      respuesta: 'Actualmente los temas están predefinidos, pero podés sugerir uno nuevo desde el formulario de contacto.'
    },
    {
      categoria: 'comunidad',
      pregunta: '¿Qué pasa si alguien me incomoda en el chat?',
      respuesta: 'Podés reportar el mensaje y nuestro equipo lo revisará para intervenir en el perfil de la usuaria. Queremos una comunidad respetuosa y segura.'
    }
  ];
  
  // Render dinámico
  function renderPreguntas(categoria = "todas") {
    const lista = document.getElementById("faq-list");
    lista.innerHTML = "";
  
    preguntasFrecuentes
      .filter(p => categoria === "todas" || p.categoria === categoria)
      .forEach((p, index) => {
        const card = document.createElement("div");
        card.className = "accordion-item";
        card.innerHTML = `
          <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
              ${p.pregunta}
            </button>
          </h2>
          <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              ${p.respuesta}
            </div>
          </div>
        `;
        lista.appendChild(card);
      });
  }
  
  // Inicial
  renderPreguntas();
  
  // Filtro por categoría
  document.querySelectorAll(".filtro-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      // Activar clase activa
      document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
  
      const cat = btn.dataset.categoria;
      renderPreguntas(cat);
    });
  });
  