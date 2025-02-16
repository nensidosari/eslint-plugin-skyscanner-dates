module.exports = {
  deprecated: (issue) => `Deprecated ${issue}, use date-fns package instead.`,
  deprecatedImportAll: (issue) =>
    `Deprecated ${issue}, in favour of import the specific function.`,
  deprecatedFormatting: (issue) =>
    `Deprecated ${issue}, use saddlebag-localisation to do all formatting work.`,
  deprecatedTZ: (issue) =>
    `Deprecated ${issue}, use date-fns-tz to do timezone manipulation work instead.`,
  deprecatedNewDate: (issue) =>
    `Deprecated ${issue}, this can easily cause timezone issues. Use date-fns/parseISO instead.`,
};
