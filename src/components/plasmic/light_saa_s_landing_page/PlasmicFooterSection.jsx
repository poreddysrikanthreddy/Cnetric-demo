// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qq7DW2w3ZciEo1BR2DHMao
// Component: pVS01W4pr1330Y
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: dOTnf9rKr9LP8s/component
import TextInput from "../../TextInput"; // plasmic-import: IwCYAwcKT4TJRN/component
import { useScreenVariants as useScreenVariantswpBk0J75TKwAa } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: wpBk0j75tKW_Aa/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_light_saa_s_landing_page.module.css"; // plasmic-import: qq7DW2w3ZciEo1BR2DHMao/projectcss
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: pVS01W4pr1330Y/css
import FacebooksvgIcon from "./icons/PlasmicIcon__Facebooksvg"; // plasmic-import: WpmnBeBKUyxIzx/icon
import TwittersvgIcon from "./icons/PlasmicIcon__Twittersvg"; // plasmic-import: 0UESrALv4CkrO4/icon
import InstagramsvgIcon from "./icons/PlasmicIcon__Instagramsvg"; // plasmic-import: 5XCkESnYGIToWS/icon
import LinkedinsvgIcon from "./icons/PlasmicIcon__Linkedinsvg"; // plasmic-import: uQt9XAOahbrBTJ/icon
import logoFooterpng7JE72VLNyGgnp from "./images/logoFooterpng.png"; // plasmic-import: 7jE72V-lNyGgnp/picture

export const PlasmicFooterSection__VariantProps = new Array();

export const PlasmicFooterSection__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicFooterSection__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswpBk0J75TKwAa()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__uLcai)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__hLdbS)}>
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"35px"}
            displayMaxWidth={"229px"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: logoFooterpng7JE72VLNyGgnp,
              fullWidth: 458,
              fullHeight: 70,
              aspectRatio: undefined
            }}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__iGmt
            )}
          >
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            }
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__uOoF6)}>
            <FacebooksvgIcon
              className={classNames(projectcss.all, sty.svg__oyJcV)}
              role={"img"}
            />

            <TwittersvgIcon
              className={classNames(projectcss.all, sty.svg__lm9QB)}
              role={"img"}
            />

            <InstagramsvgIcon
              className={classNames(projectcss.all, sty.svg__sk1F)}
              role={"img"}
            />

            <LinkedinsvgIcon
              className={classNames(projectcss.all, sty.svg__d6V0O)}
              role={"img"}
            />
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__gxFg)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__yXur
            )}
          >
            {"Menu"}
          </h4>
          <Button
            className={classNames("__wab_instance", sty.button__icK4)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__hIpQh)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__dKg)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2ZkFj
              )}
            >
              {"How it work"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__pYUxo)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__kfWfa)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___3TkmM)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zyUt5
              )}
            >
              {"Pricing"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__kXQyQ)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__qa87M)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__yfBqM)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__p0Yw6
              )}
            >
              {"FAQs"}
            </div>
          </Button>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__xOwzA)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__j2Qp6
            )}
          >
            {"Help"}
          </h4>
          <Button
            className={classNames("__wab_instance", sty.button__kcCs)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__relZo)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__jdq4)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__aqYx
              )}
            >
              {"Privacy and Policy"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__wJjDh)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___15Fg5)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__a40N8)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___5As6T
              )}
            >
              {"Terms of Use"}
            </div>
          </Button>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__mlryM)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4___28H3P
            )}
          >
            {"Company"}
          </h4>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___4NuVg
            )}
          >
            {"Lorem ipsum dolor sit amet, consectetur."}
          </div>
          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
            onChange={(...eventArgs) => {
              p.generateStateOnChangeProp($state, ["textInput", "value"])(
                (e => e.target?.value).apply(null, eventArgs)
              );
            }}
            value={p.generateStateValueProp($state, ["textInput", "value"])}
          />

          <Button
            className={classNames("__wab_instance", sty.button__hnxn8)}
            color={"white"}
            small={
              hasVariant(globalVariants, "screen", "mobile") ? true : undefined
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__cMybx
              )}
            >
              {hasVariant(globalVariants, "screen", "mobile")
                ? "Subscribe"
                : "Subscribe"}
            </div>
          </Button>
        </div>
      </p.Stack>
      <div className={classNames(projectcss.all, sty.freeBox__rttT8)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__s23W
          )}
        >
          {"Copyrights © 2022 All Rights Reserved by PlasmicApp"}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "textInput"],
  img: ["img"],
  textInput: ["textInput"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    textInput: makeNodeComponent("textInput"),
    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */