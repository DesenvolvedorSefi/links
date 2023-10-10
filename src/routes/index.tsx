import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<div class="max-w-md flex justify-between flex-col gap-8 p-8">
			<div class="mb-4">
				<img src="/logo.png" class="mx-auto h-24" alt="" />
			</div>
			<div class="links">
				<a
					href="https://contadeluz.seficredito.com.br"
					class="link link-primary"
				>
					Empréstimo na Conta de Energia
				</a>

				<a href="https://fgts.seficredito.com.br" class="link">
					<span class="sm:block hidden">
						Antecipe até 10 parcelas do seu FGTS
					</span>
					<span class="sm:hidden">Antecipe seu FGTS</span>
				</a>

				<a href="https://wa.me/5588993432811" class="link">
					Negativado? Aqui tem crédito
				</a>
				<a href="https://seficredito.com.br" class="link">
					Nosso site
				</a>
				<a href="https://wa.me/5588981468496" class="link">
					Fale conosco
				</a>
			</div>
			{/* <div class="grid grid-cols-3">
				<div>

				</div>
				<div></div>
				<div></div>
			</div> */}
			<div class="font-black text-center">
				SEFI{" "}
				<span class="font-medium text-sm">
					{" "}
					É fácil. É rápido. É SEFI.
				</span>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "SEFI - É fácil. É rápido. É SEFI.",
	meta: [
		{
			name: "description",
			content: "A maneira mais fácil de fazer o seu empréstimo é aqui.",
		},
	],
};
