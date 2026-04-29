 <script>
        const lista = document.getElementById('lista-pedidos');
        const vacio = document.getElementById('estado-vacio');
        const btn = document.getElementById('btn-pedido');
        let idCounter = 2; // El main() de promesas.js usa el id 1

        function toggleVacio() {
            vacio.style.display = lista.children.length ? 'none' : 'block';
        }

        function crearPedidoUI(id) {
            const li = document.createElement('li');
            li.id = `pedido-${id}`;
            li.className = 'animate-fade-in bg-slate-700/40 hover:bg-slate-700/60 transition-colors rounded-xl px-4 py-3 flex items-center gap-4 border border-slate-600/30';
            li.innerHTML = `
                <div class="relative flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/10 text-yellow-400 shrink-0">
                    <div class="pulse-ring text-yellow-400" id="ring-${id}"></div>
                    <span class="relative z-10 text-sm" id="icono-${id}">⏳</span>
                </div>
                <div class="flex-1 min-w-0">
                    <p class="font-semibold text-sm text-slate-100 truncate">Pedido #${id}</p>
                    <p class="text-xs text-slate-400" id="sub-${id}">Preparando en cocina…</p>
                </div>
                <span id="badge-${id}" class="shrink-0 text-[10px] font-bold uppercase tracking-wider bg-yellow-500/15 text-yellow-300 px-2.5 py-1 rounded-full border border-yellow-500/25">
                    En proceso
                </span>
            `;
            return li;
        }

        function setExito(id) {
            const li = document.getElementById(`pedido-${id}`);
            if (!li) return;
            document.getElementById(`ring-${id}`)?.remove();
            document.getElementById(`icono-${id}`).textContent = '✅';
            document.getElementById(`sub-${id}`).textContent = 'Listo para entregar';
            document.getElementById(`sub-${id}`).className = 'text-xs text-green-400';
            const badge = document.getElementById(`badge-${id}`);
            badge.textContent = 'Entregado';
            badge.className = 'shrink-0 text-[10px] font-bold uppercase tracking-wider bg-green-500/15 text-green-300 px-2.5 py-1 rounded-full border border-green-500/25';
            li.classList.add('border-green-500/20');
        }

        function setFallo(id) {
            const li = document.getElementById(`pedido-${id}`);
            if (!li) return;
            document.getElementById(`ring-${id}`)?.remove();
            document.getElementById(`icono-${id}`).textContent = '❌';
            document.getElementById(`sub-${id}`).textContent = 'Fallo: no hay leche';
            document.getElementById(`sub-${id}`).className = 'text-xs text-red-400';
            const badge = document.getElementById(`badge-${id}`);
            badge.textContent = 'Fallido';
            badge.className = 'shrink-0 text-[10px] font-bold uppercase tracking-wider bg-red-500/15 text-red-300 px-2.5 py-1 rounded-full border border-red-500/25';
            li.classList.add('border-red-500/20');
        }

        function hacerPedido() {
            const id = idCounter++;
            lista.appendChild(crearPedidoUI(id));
            toggleVacio();

            // Feedback visual rápido al botón
            btn.disabled = true;
            btn.classList.add('opacity-60', 'cursor-not-allowed', 'translate-y-0');
            btn.classList.remove('hover:-translate-y-0.5');
            setTimeout(() => {
                btn.disabled = false;
                btn.classList.remove('opacity-60', 'cursor-not-allowed');
                btn.classList.add('hover:-translate-y-0.5');
            }, 400);

            prepararPedido(id)
                .then(() => setExito(id))
                .catch(() => setFallo(id));
        }

        btn.addEventListener('click', hacerPedido);
        toggleVacio();
    </script>