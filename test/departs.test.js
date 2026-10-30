import test from 'node:test';
import assert from 'node:assert/strict';
import { annonce, aujourdhuiGeneve, estFerme, statut } from '../src/lib/departs.js';

const semaine = ['2026-10-27', '2026-10-28', '2026-10-29', '2026-10-30'];
const statuts = (jour) => semaine.map((d) => statut(d, jour));

test('statut selon le jour', () => {
  assert.equal(statut('2026-10-27', '2026-10-28'), 'Parti');
  assert.equal(statut('2026-10-28', '2026-10-28'), 'Embarquement');
  assert.equal(statut('2026-10-29', '2026-10-28'), 'Prévu');
});

test('milieu de semaine', () => {
  assert.deepEqual(statuts('2026-10-28'), ['Parti', 'Embarquement', 'Prévu', 'Prévu']);
  assert.equal(annonce(semaine, '2026-10-28'), null);
});

test('samedi : service sans plat du jour, semaine terminée', () => {
  assert.deepEqual(statuts('2026-10-31'), ['Parti', 'Parti', 'Parti', 'Parti']);
  assert.equal(annonce(semaine, '2026-10-31'), 'Les plats de la semaine arrivent mardi.');
});

test('dimanche et lundi : fermé', () => {
  assert.equal(estFerme('2026-11-01'), true);
  assert.equal(estFerme('2026-11-02'), true);
  assert.equal(estFerme('2026-11-03'), false);
  assert.equal(estFerme('2026-10-31'), false);
});

test('changement de semaine', () => {
  const suivante = ['2026-11-03', '2026-11-04', '2026-11-05', '2026-11-06'];
  // Lundi, la nouvelle semaine est déjà publiée
  assert.equal(statut(suivante[0], '2026-11-02'), 'Prévu');
  assert.equal(annonce(suivante, '2026-11-02'), 'Fermé aujourd\'hui. Premier départ mardi.');
  // Lundi, l'ancienne semaine n'a pas été remplacée
  assert.equal(annonce(semaine, '2026-11-02'), 'Les plats de la semaine arrivent mardi.');
  // Mardi, le restaurant a oublié de mettre à jour
  assert.equal(annonce(semaine, '2026-11-03'), 'Les plats de la semaine arrivent mardi.');
});

test('semaine incomplète et vide', () => {
  const trois = ['2026-10-27', '2026-10-29', '2026-10-30'];
  assert.equal(annonce(trois, '2026-10-28'), null);
  assert.equal(annonce([], '2026-10-28'), 'Les plats de la semaine arrivent mardi.');
});

test('le jour suit Genève, pas le fuseau du visiteur', () => {
  assert.equal(aujourdhuiGeneve(new Date('2026-10-29T22:30:00Z')), '2026-10-29');
  assert.equal(aujourdhuiGeneve(new Date('2026-10-29T23:30:00Z')), '2026-10-30'); // 00h30 à Genève
  assert.equal(aujourdhuiGeneve(new Date('2026-07-14T22:30:00Z')), '2026-07-15'); // heure d'été
});
