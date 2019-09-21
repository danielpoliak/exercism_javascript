//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dnaUnit) => {
 const dnaRnaPairs = {
   'G': 'C',
   'T': 'A',
   'A': 'U',
   'C': 'G'
 }
 const rnaTranscription = dnaUnit.length > 1 
 ? dnaUnit.split('').map((dnaUnit) => dnaRnaPairs[dnaUnit]).join('')
 : dnaRnaPairs[dnaUnit]
 
 return  rnaTranscription || ''
};
