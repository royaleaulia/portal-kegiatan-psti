@props(['status'])

@if ($status)
    <div {{ $attributes->merge(['class' => 'font-bold text-sm text-green-600 dark:text-green-400']) }}>
        {{ $status }}
    </div>
@endif
