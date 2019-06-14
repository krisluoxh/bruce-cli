#!/usr/bin/env node
const e=require("chalk"),i=require("commander"),r=require("latest-version"),o=require("semver"),{version:n}=require("../package"),{ACTION_TEXT:a,GLOB_TEXT:s}=require("../i18n"),{AutoBin:c,ShowMsg:t}=require("../util/setting");(async()=>{o.gte(process.version,"v8.0.0")||(t("red",s.judgeVerNode),process.exit(1)),o.eq(n,await r("bruce-cli"))||(t("red",s.judgeVerBruce),process.exit(1)),i.usage(e.yellowBright("<command> [option]")).version(n,"-v, --version").description(s.desc),i.command("build").alias("b").description(e.blueBright(a.build)).action(()=>c("build")),i.command("init").alias("i").description(e.blueBright(a.init)).action(()=>c("init")),i.command("locale").alias("l").description(e.blueBright(a.locale)).action(()=>c("locale")),i.command("new").alias("n").description(e.blueBright(a.new)).action(()=>c("new")),i.command("remove").alias("r").description(e.blueBright(a.remove)).action(()=>c("remove")),i.parse(process.argv),!i.args.length&&i.help()})();