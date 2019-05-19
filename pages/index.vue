<template>
	<div>
		<header>
			<img
				src="~assets/tezonator-logo.png"
				class="logo"
			>
		</header>
		<section>
			<img
				class="tezonator-photo"
				src="~assets/tezonator-odroid-n2.jpg"
			>
			<a
				class="button"
				href="/odroid-images/tezonator-light-final.img.xz"
			>Download ODroid-N2 microSD image</a>
		</section>
		<footer>

		</footer>
	</div>
</template>

<style lang="stylus" scoped>
@import '~assets/variables'

header
	padding 5mm 0

section
	text-align center

.logo
	display block
	margin 0 auto
	max-width 800px
	width 95vw

.tezonator-photo
	border 2px solid brand-purple
	display block
	margin 5mm auto
	max-width 700px
	padding 0
	width 95%

.button
	margin 10mm
</style>

