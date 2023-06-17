@props(['value'])

<label {{ $attributes->merge(['class' => 'block font-bold text-sm text-gray-600 dark:text-black']) }}>
    {{ $value ?? $slot }}
</label>
