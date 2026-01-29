// Module: MX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MX8 = v((jLz, jX8) => {
  function vfq(A) {
    let K = {
        keyword: "and case default else elsif false if in import enherits node or true undef unless main settings $string ",
        literal: "alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted",
        built_in: "architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version"
      },
      q = A.COMMENT("#", "$"),
      Y = "([A-Za-z_]|::)(\\w|::)*",
      z = A.inherit(A.TITLE_MODE, {
        begin: "([A-Za-z_]|::)(\\w|::)*"
      }),
      w = {
        className: "variable",
        begin: "\\$([A-Za-z_]|::)(\\w|::)*"
      },
      H = {
        className: "string",
        contains: [A.BACKSLASH_ESCAPE, w],
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }]
      };
    return {
      name: "Puppet",
      aliases: ["pp"],
      contains: [q, w, H, {
        beginKeywords: "class",
        end: "\\{|;",
        illegal: /=/,
        contains: [z, q]
      }, {
        beginKeywords: "define",
        end: /\{/,
        contains: [{
          className: "section",
          begin: A.IDENT_RE,
          endsParent: !0
        }]
      }, {
        begin: A.IDENT_RE + "\\s+\\{",
        returnBegin: !0,
        end: /\S/,
        contains: [{
          className: "keyword",
          begin: A.IDENT_RE
        }, {
          begin: /\{/,
          end: /\}/,
          keywords: K,
          relevance: 0,
          contains: [H, q, {
            begin: "[a-zA-Z_]+\\s*=>",
            returnBegin: !0,
            end: "=>",
            contains: [{
              className: "attr",
              begin: A.IDENT_RE
            }]
          }, {
            className: "number",
            begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            relevance: 0
          }, w]
        }],
        relevance: 0
      }]
    };
  }
  jX8.exports = vfq;
});

// Register to shared state
__$.MX8 = MX8;
