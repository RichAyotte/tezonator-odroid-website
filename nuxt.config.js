/**
 * @overview    Nuxt config
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @date        2019-05-18 10:39:39
 * @license     MIT License
 */

import rucksackCss from 'rucksack-css'
import pkg from './package'

export default {
	mode: 'spa'

	/**
	 * Headers of the page
	 * @type {Object}
	 */
	, head: {
		title: pkg.name
		, meta: [{
			charset: 'utf-8'
		}
		, {
			name: 'viewport'
			, content: 'width=device-width, initial-scale=1'
		}
		, {
			hid: 'description'
			, name: 'description'
			, content: pkg.description
		}]
		, link: [{
			rel: 'icon'
			, type: 'image/x-icon'
			, href: '/favicon.ico'
		}]
	}

	/**
	 * Customize the progress-bar color
	 * @type {Object}
	 */
	, loading: {
		color: '#fff'
	}

	/**
	 * Global CSS
	 * @type {Array}
	 */
	, css: [
		{
			lang: 'stylus'
			, src: 'assets/global.styl'
		}
	]

	/**
	 * Manifest
	 * @type {Object}
	 */
	, manifest: {
		name: 'Tezonator - the Tezos baker'
		// eslint-disable-next-line
		, short_name: 'Tezonator'
	}

	/**
	 * Build configuration
	 * @type {Object}
	 */
	, build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre'
					, test: /\.(js|vue)$/
					, loader: 'eslint-loader'
					, exclude: /(node_modules)/
				})
			}
		}
		, parallel: true
		, postcss: {
			plugins: [
				rucksackCss
			]
		}
	}
}
