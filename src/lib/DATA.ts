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
	'Hello',
	'Thanks',
	"Please",
	'Yes',
	'No',
	'Sorry',
	'Excuse me',
	'See you later',
	'Good bye',
	'I\'m sory',
	'I don\'t understand',
] as const;

const SITUATIONS: Situations = {
	restaurant: {
		nom: 'Restaurant',
		steps: {
			accueil: {
				answers: ['coffee'],
				base_line: 'Hello, what do you want ?',
				blank_state: ['Hello, one ', "please"],
				name: 'Reception',
				url_image: 'https://picsum.photos/500/300',
				words: ['coffee', 'table', 'restaurant menu'],
			},
			addition: {
				answers: ['use', 'bank'],
				base_line: 'How you want to pay ?',
				blank_state: ["I would use the", 'card', "please"],
				name: 'Paiement',
				url_image: 'https://picsum.photos/600/300',
				words: ['use', 'bank'],
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
	hotel: {
		nom: 'Hotel',
		steps: {
			accueil: {
				answers: ['café'],
				base_line: 'Bonjour à vous, je peux vous aider ?',
				blank_state: ['Bonjour, un ', "s'il vous plait"],
				name: 'accueil',
				url_image: 'https://picsum.photos/500/300',
				words: ['café', 'table', 'menu'],
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
