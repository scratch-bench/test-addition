
function oustide() {
  const x = 1;

  const helper = (data) => _transform(data ?? _makedata());

  return Factory.create(
    { with: { ehandle: (e) => console.error(e) }, id: _makeid() }
  )
    .chain(Operation.BEGIN)
    .chain(Operation.ACQUIRE)
    .curry(helper)
    .until(_sigterm())
    .until(Operation.DONE)
    .extract();
}