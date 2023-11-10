export interface Situations {
	[key: string]: Situation;
}

export interface Situation {
	nom: string;
	steps: SituationSteps;
	url: string;
}

export interface SituationSteps {
	[key: string]: SituationStep;
}

export interface SituationStep {
	readonly answers: string[];
	base_line: string;
	readonly blank_state: string[];
	name: string;
	url_image: string;
	readonly words: string[];
}

const DICTIONARY = [
	'Bonjour',
	'Merci',
	"S'il vous plait",
	'Oui',
	'Non',
	'Pardon',
	'Excusez moi',
	'A bientôt',
	'Au revoir',
	'Désolé',
	'Je suis désolé',
	'Je ne comprends pas',
] as const;

const SITUATIONS: Situations = {
	restaurant1: {
		nom: 'restaurant1',
		steps: {
			accueil: {
				answers: ['café'],
				base_line: 'Bonjour à vous, je peux vous aider ?',
				blank_state: ['Bonjour, un ', "s'il vous plait"],
				name: 'accueil',
				url_image: 'https://picsum.photos/500/300',
				words: ['café', 'table', 'menu', 'gros caca', 'thanos'],
			},
			addition: {
				answers: ['utiliser', 'bancaire'],
				base_line: 'Votre moyen de paiement ?',
				blank_state: ["j'aimerai", 'la carte', "s'il vous plait"],
				name: 'addition',
				url_image: 'https://picsum.photos/600/300',
				words: ['utiliser', 'bancaire'],
			},
			commander: {
				answers: ['voudrais', 'un café'],
				base_line: 'Que voulez vous commander ?',
				blank_state: ['Bonjour, je ', 'commander', "s'il vous plait"],
				name: 'commander',
				url_image: 'https://picsum.photos/600/300',
				words: ['voudrais', 'un café', 'menu'],
			},
		},
		url: 'https://picsum.photos/500/300',
	},
	restaurant2: {
		nom: 'restaurant2',
		steps: {
			accueil: {
				answers: ['café'],
				base_line: 'Bonjour à vous, je peux vous aider ?',
				blank_state: ['Bonjour, un ', "s'il vous plait"],
				name: 'accueil',
				url_image: 'https://picsum.photos/500/300',
				words: ['café', 'table', 'menu', 'gros caca', 'thanos'],
			},
			commander: {
				answers: ['café', ''],
				base_line: 'Que voulez vous commander ?',
				blank_state: ['Bonjour, je ', 'commander', "s'il vous plait"],
				name: 'commander',
				url_image: 'https://picsum.photos/600/300',
				words: ['café', 'table', 'menu'],
			},
		},
		url: 'https://picsum.photos/500/300',
	},
};

export { DICTIONARY, SITUATIONS };
