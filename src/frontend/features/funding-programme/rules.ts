export const programmeRules = {
  registrationFee: 2999,
  includedParticipants: 2,
  additionalParticipantFee: 2000,
  gstPercent: 18,
  firstAward: 1000000,
  secondAward: 500000,
  fundingGuaranteed: false,
  scanningDays: 15,
  eventStart: "2026-12-29",
  eventEnd: "2026-12-31",
} as const;

export function registrationTotal(participants: number) {
  const base = programmeRules.registrationFee + Math.max(0, participants - programmeRules.includedParticipants) * programmeRules.additionalParticipantFee;
  return Math.round(base * (1 + programmeRules.gstPercent / 100) * 100) / 100;
}