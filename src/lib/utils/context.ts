import type { Situation, SituationStep } from "$lib/DATA";

import { getContext, setContext } from "svelte";

export function setSituation(sit: Situation) {
  setContext("situation", sit);
}

export function getSituation(): Situation {
  return getContext("situation");
}

export function setSituationStep(step: SituationStep) {
  setContext("situationStep", step);
}

export function getSituationStep(): SituationStep {
  return getContext("situationStep");
}